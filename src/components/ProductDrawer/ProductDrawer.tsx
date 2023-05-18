import { Button, Drawer, Form, Input, message, Select } from "antd";
import { FC, useEffect } from "react";
import { useLoad, usePostRequest, usePutRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { ProductDriver } from "../../pages/types";
import { formLabel } from "../../utils/helpers";
import { productPost, productPut, productType } from "../../utils/urls";
import { MediaApi } from "../MediaApi/MediaApi";
import { ProductEditI, ProductPostI, ProductTypeI } from "../type";

export const ProductDrawer: FC<ProductDriver> = ({
    open,
    onClose,
    editProduct,
    req,
}) => {
    const translate = useLanguage();
    const [form] = Form.useForm();

    const onCloseDraver = () => {
        form.resetFields();
        onClose();
    };

    const ProductTypeList = useLoad<ProductTypeI>({ url: productType });
    const { response } = ProductTypeList;

    const ProductPostReq = usePostRequest<ProductPostI>({ url: productPost });

    const ProductPutReq = usePutRequest<ProductEditI>({
        url: productPut(editProduct?.id as number),
    });

    const onFinish = async (e: ProductPostI) => {
        const { product_type_id, product_name, price, supplier, photo } = e;

        if (editProduct) {
            const { success, error } = await ProductPutReq.request({
                data: {
                    product_type_id,
                    product_name,
                    price: Number(price),
                    supplier,
                    photo,
                },
            });
            if (success) {
                message.success("PRODUCT UPDATE SUCCESSFULLY");
                req();
                onCloseDraver();
            } else {
                message.error(error);
            }
        } else {
            const { success, error } = await ProductPostReq.request({
                data: {
                    product_type_id,
                    product_name,
                    price: Number(price),
                    supplier,
                    photo,
                },
            });
            if (success) {
                message.success("PRODUCT ADDED SUCCESSFULLY");
                req();
                onCloseDraver();
            } else {
                message.error(error);
            }
        }
    };

    useEffect(() => {
        if (editProduct != null) {
            form.setFieldsValue({
                ...editProduct,
            });
        }
    }, [editProduct]);

    const hi = { name: "hi" };

    return (
        <div className='product-drawer'>
            <Drawer open={open} onClose={onCloseDraver} closable={false}>
                <div className='product-drawer__body'>
                    <div className='product-drawer__title'>
                        {translate("newProduct")}
                    </div>
                    <Form
                        className='product-drawer__form'
                        onFinish={onFinish}
                        form={form}
                    >
                        <div className='drawer__item'>
                            <p className='drawer__label'>
                                {translate("praductT")}
                            </p>
                            <Form.Item
                                name='product_type_id'
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select your Product type",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder='select'
                                    className='member-driver__select'
                                    options={response?.data.result.map(
                                        (item) => ({
                                            value: item.id,
                                            label: item.name,
                                        })
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div className='drawer__item'>
                            <p className='drawer__label'>
                                {translate("productN")}
                            </p>
                            <Form.Item
                                {...formLabel("Product name", "product_name")}
                            >
                                <Input placeholder={translate("productN")} />
                            </Form.Item>
                        </div>
                        <div className='drawer__item'>
                            <p className='drawer__label'>
                                {translate("unitP")}
                            </p>
                            <Form.Item {...formLabel("Price", "price")}>
                                <Input
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    placeholder={translate("price")}
                                />
                            </Form.Item>
                        </div>
                        <div className='drawer__item'>
                            <p className='drawer__label'>{translate("sup")}</p>
                            <Form.Item {...formLabel("Supplier", "supplier")}>
                                <Input placeholder={translate("sup")} />
                            </Form.Item>
                        </div>

                        <div className='drawer__item_img'>
                            <p className='drawer__label'>{translate("img")}</p>
                            <Form.Item
                                name='photo'
                                rules={[
                                    {
                                        required: true,
                                        message: translate("valName"),
                                    },
                                ]}
                            >
                                <MediaApi form={form} name='photo' />
                            </Form.Item>
                        </div>
                        <div className='drawer__item'>
                            <Form.Item className='member-driver__btn'>
                                <Button
                                    className='member-driver__cancel'
                                    onClick={() => onCloseDraver()}
                                    disabled={
                                        editProduct
                                            ? ProductPutReq.loading
                                            : ProductPostReq.loading
                                    }
                                >
                                    Cancel
                                </Button>
                                <Button
                                    htmlType='submit'
                                    className='member-driver__submit'
                                    loading={
                                        editProduct
                                            ? ProductPutReq.loading
                                            : ProductPostReq.loading
                                    }
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Drawer>
        </div>
    );
};
