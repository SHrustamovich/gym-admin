import { message, Modal, Upload } from "antd";
import { UploadFile } from "antd/es/upload/interface";
import { FC, useState } from "react";
import { handlyEncrypted } from "../../utils/helpers";
import { $mediaApi } from "../../utils/https";
import { mediaAdd } from "../../utils/urls";
import { MediaTypeI } from "../type";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

export const MediaApi: FC = () => {
    const [fileList, setFileList] = useState<UploadFile<MediaTypeI>[]>([]);
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewTitle, setPreviewTitle] = useState("");

    const onPreview = async ({ file }: any) => {
        setPreviewImage(file.url);
        setPreviewOpen(true);
        setPreviewTitle(file.url);
    };

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
            <div>Upload</div>
        </div>
    );

    return (
        <div className='media'>
            <Upload
                fileList={fileList as UploadFile[]}
                customRequest={handlyChange}
                onPreview={onPreview}
            >
                {fileList.length == 1 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle}>
                <img src={previewImage} alt='' />
            </Modal>
        </div>
    );
};
