import { Button, Drawer, Form, Input, Select } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { draverI } from "../../pages/types";

export const ProductDrawer: FC<draverI> = ({ open, onClose }) => {
    const translate = useLanguage();
    return (
        <div className='product-drawer'>
            <Drawer open={open} onClose={onClose} closable={false}>
                <div className='product-drawer__body'>
                    <div className='product-drawer__title'>
                        {translate("newProduct")}
                    </div>
                    <Form className='product-drawer__form'>
                        <div className='drawer__item'>
                            <p className='drawer__label'>
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
                        <div className='drawer__item'>
                            <p className='drawer__label'>
                                {translate("productN")}
                            </p>
                            <Form.Item
                                name='usernamee'
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
                            <p className='drawer__label'>
                                {translate("unitP")}
                            </p>
                            <Form.Item
                                name='usernamee'
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
                            <p className='drawer__label'>{translate("disc")}</p>
                            <Form.Item
                                name='usernamee'
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
                            <p className='drawer__label'>{translate("sup")}</p>
                            <Form.Item
                                name='usernamee'
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
                                <Button className='member-driver__cancel'>
                                    Cancel
                                </Button>
                                <Button
                                    htmlType='submit'
                                    className='member-driver__submit'
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
