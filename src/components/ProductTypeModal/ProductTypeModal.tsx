import { Button, Form, Input, message, Modal } from "antd";
import { FC, useEffect } from "react";
import { usePostRequest, usePutRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { ProductTypeModalI } from "../../pages/types";
import { productTypeEditUrl, productTypePost } from "../../utils/urls";
import { ProductTypePostI, ProductTypeResultI } from "../type";

export const ProductTypeModal: FC<ProductTypeModalI> = ({
    openModal,
    onCancel,
    req,
    productTypeEdit,
}) => {
    const [form] = Form.useForm();
    const translate = useLanguage();

    const removeModal = () => {
        form.resetFields();
        onCancel();
    };

    const ProductTypePostReq = usePostRequest<ProductTypeResultI>({
        url: productTypePost,
    });

    const ProductTypeEditReq = usePutRequest({
        url: productTypeEditUrl(productTypeEdit?.id as number),
    });

    const onFinish = async (e: ProductTypePostI) => {
        const { name } = e;
        if (productTypeEdit) {
            const { success, error } = await ProductTypeEditReq.request({
                data: {
                    name,
                },
            });
            if (success) {
                message.success("PRODUCT TYPE ADDED SUCCESSFULLY");
                req();
                removeModal();
            } else {
                message.error(error);
            }
        } else {
            const { success, error } = await ProductTypePostReq.request({
                data: {
                    name,
                },
            });
            if (success) {
                message.success("PRODUCT TYPE ADDED SUCCESSFULLY");
                req();
                removeModal();
            } else {
                message.error(error);
            }
        }
    };

    useEffect(() => {
        if (productTypeEdit != null) {
            form.setFieldsValue({
                ...productTypeEdit,
            });
        }
    }, [productTypeEdit]);

    return (
        <div className='product-type-modal'>
            <Modal
                open={openModal}
                onCancel={removeModal}
                width={307}
                footer={null}
                centered
            >
                <div className='type__modal'>
                    <div className='product-drawer__title'>
                        {translate("praductT")}
                    </div>
                    <Form form={form} onFinish={onFinish}>
                        <div className='drawer__item'>
                            <p className='drawer__label'>
                                {translate("praductT")}
                            </p>
                            <Form.Item
                                name='name'
                                rules={[
                                    {
                                        required: true,
                                        message: translate("valName"),
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className='drawer__item'>
                            <Form.Item className='member-driver__btn'>
                                <Button
                                    className='member-driver__cancel'
                                    onClick={() => removeModal()}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    htmlType='submit'
                                    className='member-driver__submit'
                                    loading={
                                        productTypeEdit
                                            ? ProductTypeEditReq.loading
                                            : ProductTypePostReq.loading
                                    }
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};
