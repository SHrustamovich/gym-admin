import { Button, Drawer, Form, Input, message, Select } from "antd";
import { FC, useEffect } from "react";
import { useLoad, usePostRequest, usePutRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { InventoryDraverI, InventoryPostI } from "../../pages/types";
import {
    inventoryPost,
    inventoryUpdateUrl,
    productGet,
} from "../../utils/urls";
import { ProductI } from "../type";

export const InventoryDrawer: FC<InventoryDraverI> = ({
    open,
    onClose,
    req,
    editInventory,
}) => {
    const translate = useLanguage();
    const [form] = Form.useForm();

    const ProductList = useLoad<ProductI>({ url: productGet });

    const { response } = ProductList;

    const InventoryPostReq = usePostRequest<InventoryPostI>({
        url: inventoryPost,
    });

    const InventoryUpdateReq = usePutRequest({
        url: inventoryUpdateUrl(editInventory?.id as number),
    });

    const onCloseDriver = () => {
        form.resetFields();
        onClose();
    };

    console.log(editInventory, "ddddddddddd");

    const onFinish = async (e: InventoryPostI) => {
        const { product_id, quantity } = e;
        if (editInventory) {
            const { success, error } = await InventoryUpdateReq.request({
                data: {
                    product_id,
                    quantity,
                },
            });
            if (success) {
                message.success("INVENTORY UPDATE SUCCESSFULLY");
                req();
                onCloseDriver();
            } else {
                message.error(error);
            }
        } else {
            const { success } = await InventoryPostReq.request({
                data: {
                    product_id,
                    quantity,
                },
            });
            if (success) {
                message.success("INVENTORY ADDED SUCCESSFULLY");
                req();
                onCloseDriver();
            } else {
                message.error("Oldin qo'shilgan");
            }
        }
    };

    useEffect(() => {
        if (editInventory != null) {
            form.setFieldsValue({
                ...editInventory,
            });
        }
    }, [editInventory]);

    return (
        <div className='inventory-drawer'>
            <Drawer
                placement='right'
                onClose={onCloseDriver}
                open={open}
                closable={false}
            >
                <div className='inventory-drawer__body'>
                    <div className='inventory-drawer__title'>
                        {translate("stock")}
                    </div>
                    <Form onFinish={onFinish} form={form}>
                        <div className='inventory-drawer__item'>
                            <p className='inventory-drawer__label'>
                                {translate("praductT")}
                            </p>
                            <Form.Item
                                name='product_id'
                                rules={[
                                    {
                                        required: true,
                                        message: translate("valName"),
                                    },
                                ]}
                            >
                                <Select
                                    placeholder='select'
                                    options={response?.data.result.map(
                                        (item) => ({
                                            value: item.id,
                                            label: item.product_name,
                                        })
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div className='inventory-drawer__item'>
                            <p className='inventory-drawer__label'>
                                {translate("quantity")}
                            </p>
                            <Form.Item
                                name='quantity'
                                rules={[
                                    {
                                        required: true,
                                        message: translate("valName"),
                                    },
                                ]}
                            >
                                <Input placeholder={translate("quantity")} />
                            </Form.Item>
                        </div>
                        <div className='inventory-drawer__item'>
                            <Form.Item className='member-driver__btn'>
                                <Button
                                    className='member-driver__cancel'
                                    onClick={() => onCloseDriver()}
                                >
                                    {translate("cancel")}
                                </Button>
                                <Button
                                    htmlType='submit'
                                    className='member-driver__submit'
                                    loading={InventoryPostReq.loading}
                                >
                                    {translate("save")}
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Drawer>
        </div>
    );
};
