import { Button, DatePicker, Drawer, Form, Input, Select } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { draverI } from "../../pages/types";

export const MemberShipDriver: FC<draverI> = ({ open, onClose }) => {
    const translate = useLanguage();

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='member-driver'>
            <Drawer
                placement='right'
                onClose={onClose}
                open={open}
                closable={false}
                className='member-driver__main'
            >
                <div className='member-driver__body'>
                    <p className='member-driver__title'>
                        {translate("membership")}
                    </p>
                    <div className='member-driver__alls'>
                        <Form className='member-driver__form'>
                            <div className='drawer__item'>
                                <div className='drawer__label'>
                                    {translate("memberType")}
                                </div>
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
                            <div className='drawer__item'>
                                <div className='drawer__label'>
                                    {translate("term")}
                                </div>
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
                            <div className='drawer__item'>
                                <div className='drawer__label'>
                                    {translate("date")}
                                </div>
                                <Form.Item
                                    name='username'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <DatePicker />
                                </Form.Item>
                            </div>
                            <div className='drawer__item'>
                                <div className='drawer__label'>
                                    {translate("payment")}
                                </div>
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
                                        className='member-driver__select'
                                        onChange={handleChange}
                                        options={[
                                            { value: "jack", label: "Jack" },
                                            { value: "lucy", label: "Lucy" },
                                        ]}
                                    />
                                </Form.Item>
                            </div>
                            <div className='drawer__item'>
                                <div className='drawer__label'>
                                    {translate("memberType")}
                                </div>
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
                            <div className='drawer__item'>
                                <p className='member-driver__price'>
                                    {translate("total")}:{1234}
                                </p>
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
                                        Submit
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};
