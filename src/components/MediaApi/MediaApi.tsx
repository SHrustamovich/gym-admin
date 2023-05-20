import { Form, message, Modal, Upload } from "antd";
import { UploadFile } from "antd/es/upload/interface";
import { FC, useEffect, useId, useState } from "react";
import { handlyEncrypted } from "../../utils/helpers";
import { $mediaApi } from "../../utils/https";
import { mediaAdd } from "../../utils/urls";
import { MediaPropsI, MediaTypeI } from "../type";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import useLanguage from "../../hooks/useLanguage";

export const MediaApi: FC<MediaPropsI> = ({ form, name }) => {
    const [fileList, setFileList] = useState<UploadFile<MediaTypeI>[]>([]);
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewTitle, setPreviewTitle] = useState("");

    const ID = useId();

    const translate = useLanguage();

    const onPreview = async (file: any) => {
        setPreviewImage(file.url);
        setPreviewOpen(true);
        setPreviewTitle(file.url);
    };

    const handleCancel = () => setPreviewOpen(false);

    const handlyChange = async ({ file }: any) => {
        setLoading(true);
        if (
            file.type == "image/jpeg" ||
            file.type == "image/png" ||
            file.type == "image/gif" ||
            file.type == "image/webp"
        ) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("project", "gym");

            const encrypted = handlyEncrypted();
            const headers = {
                "x-auth-key": encrypted,
            };
            try {
                const mediaApiRequest = await $mediaApi.post(
                    mediaAdd,
                    formData,
                    {
                        headers,
                    }
                );
                const data = mediaApiRequest.data;

                setFileList([
                    ...fileList,
                    {
                        uid: data.id,
                        status: "done",
                        url: data.url,
                        name: file.name,
                    },
                ]);

                form.setFieldValue(name, data.url);
            } catch (error) {
                setFileList([
                    ...fileList,
                    {
                        uid: file.id,
                        status: "error",
                        url: file.url,
                        name: file.name,
                    },
                ]);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
            setFileList([
                {
                    uid: file.uid,
                    name: file.name,
                    status: "error",
                },
            ]);
            return message.error("You can only upload JPG/PNG file!");
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className='upload'>{translate("upload")}</div>
        </div>
    );

    // edit
    const imageUrl = Form.useWatch("photo", form);

    console.log(fileList, "yyyyyyy");

    useEffect(() => {
        console.log("render");
        if (typeof imageUrl === "string" && !!imageUrl.trim()) {
            setFileList([
                {
                    uid: ID,
                    status: "done",
                    url: imageUrl,
                    name: imageUrl,
                },
            ]);
        }
    }, [imageUrl]);

    return (
        <div className='media'>
            <Upload
                fileList={fileList as UploadFile[]}
                customRequest={handlyChange}
                onPreview={onPreview}
                listType='picture-card'
            >
                {fileList.length == 1 ? null : uploadButton}
            </Upload>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img
                    alt='example'
                    style={{ width: "100%" }}
                    src={previewImage}
                />
            </Modal>
        </div>
    );
};
