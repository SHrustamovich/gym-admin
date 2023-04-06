import { Button, Drawer, Form, Input, Select } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { draverI } from "../../pages/types";

export const InventoryDrawer: FC<draverI> = ({ open, onClose }) => {
    const translate = useLanguage();
    return (
        <div className='inventory-drawer'>
            <Drawer
                placement='right'
                onClose={onClose}
                open={open}
                closable={false}
            >
                <div className='inventory-drawer__body'>
                    <div className='inventory-drawer__title'>
                        {translate("stock")}
                    </div>
                    <Form>
                        <div className='inventory-drawer__item'>
                            <p className='inventory-drawer__label'>
                                {translate("praductT")}
                            </p>
                            <Form.Item
                                name='username'
                                rules={[
                                    {
                                        required: true,
                                        message: translate("valName"),
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    // placeholder='Select a person'
                                    optionFilterProp='children'
                                    // onChange={onChange}
                                    // onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? "")
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: "jack",
                                            label: "Jack",
                                        },
                                        {
                                            value: "lucy",
                                            label: "Lucy",
                                        },
                                        {
                                            value: "tom",
                                            label: "Tom",
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </div>
                        <div className='inventory-drawer__item'>
                            <p className='inventory-drawer__label'>
                                {translate("quantity")}
                            </p>
                            <Form.Item
                                name='username'
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
                        <div className='inventory-drawer__item'>
                            <Form.Item className='member-driver__btn'>
                                <Button className='member-driver__cancel'>
                                    {translate("cancel")}
                                </Button>
                                <Button
                                    htmlType='submit'
                                    className='member-driver__submit'
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
