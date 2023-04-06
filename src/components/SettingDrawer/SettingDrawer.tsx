import { Button, Drawer, Form, Input } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { draverI } from "../../pages/types";

export const SettingDrawer: FC<draverI> = ({ open, onClose }) => {
    const translate = useLanguage();

    return (
        <div className='setting-drawer'>
            <Drawer open={open} onClose={onClose} closable={false}>
                <div className='setting-drawer__body'>
                    <div className='setting-drawer__title'>
                        {translate("memberType")}
                    </div>
                    <Form>
                        <div className='item'>
                            <p className='label'>{translate("memberType")}</p>
                            <Form.Item
                                name='memberTypeName'
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
                        <div className='item'>
                            <p className='label'>{translate("fee")}</p>
                            <Form.Item
                                name='fee'
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
                        <div className='item'>
                            <p className='label'>{translate("disc")}</p>
                            <Form.Item
                                name='disc'
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
                        <div className='item'>
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
