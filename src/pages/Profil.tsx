import { Button, Form, Input } from "antd";
import { FC } from "react";
import {
    EmailIcon,
    LoginPasswordIcon,
    PersonIcon,
    PhoneIcon,
} from "../assets/icons/icons";
import useLanguage from "../hooks/useLanguage";

export const Profil: FC = () => {
    const translate = useLanguage();
    return (
        <div className='profil'>
            <Form className='profil__form'>
                <div className='profil__user user'>
                    <div className='user__title'>{translate("user")}</div>
                    <div className='item'>
                        <p className='label'>{translate("firstName")}</p>
                        <Form.Item
                            name='firstName'
                            className='user__item'
                            rules={[
                                {
                                    required: true,
                                    message: translate("fill"),
                                },
                            ]}
                        >
                            <div className='user__input'>
                                <PersonIcon />
                                <Input />
                            </div>
                        </Form.Item>
                    </div>
                    <div className='item'>
                        <p className='label'>{translate("lastName")}</p>
                        <Form.Item
                            name='lastname'
                            className='user__item'
                            rules={[
                                {
                                    required: true,
                                    message: translate("fill"),
                                },
                            ]}
                        >
                            <div className='user__input'>
                                <PersonIcon />
                                <Input />
                            </div>
                        </Form.Item>
                    </div>
                    <div className='item'>
                        <p className='label'>{translate("email")}</p>
                        <Form.Item
                            name='firstName'
                            className='user__item'
                            rules={[
                                {
                                    required: true,
                                    message: translate("fill"),
                                },
                            ]}
                        >
                            <div className='user__input'>
                                <EmailIcon />
                                <Input />
                            </div>
                        </Form.Item>
                    </div>
                    <div className='item'>
                        <p className='label'>{translate("phone")}</p>
                        <Form.Item
                            name='firstName'
                            className='user__item'
                            rules={[
                                {
                                    required: true,
                                    message: translate("fill"),
                                },
                            ]}
                        >
                            <div className='user__input'>
                                <PhoneIcon />
                                <Input />
                            </div>
                        </Form.Item>
                    </div>
                </div>
                <div className='profil__password password'>
                    <div className='user__title'>{translate("password")}</div>
                    <div className='item'>
                        <p className='label'>{translate("tPassword")}</p>
                        <Form.Item
                            name='currentPassword'
                            className='user__item'
                            rules={[
                                {
                                    required: true,
                                    message: translate("fill"),
                                },
                            ]}
                        >
                            <div className='user__input'>
                                <LoginPasswordIcon />
                                <Input />
                            </div>
                        </Form.Item>
                    </div>
                    <div className='item'>
                        <p className='label'>{translate("nPassword")}</p>
                        <Form.Item
                            name='new'
                            className='user__item'
                            rules={[
                                {
                                    required: true,
                                    message: translate("fill"),
                                },
                            ]}
                        >
                            <div className='user__input'>
                                <LoginPasswordIcon />
                                <Input />
                            </div>
                        </Form.Item>
                    </div>
                    <div className='item'>
                        <p className='label'>{translate("cPassword")}</p>
                        <Form.Item
                            name='confirm'
                            className='user__item'
                            rules={[
                                {
                                    required: true,
                                    message: translate("fill"),
                                },
                            ]}
                        >
                            <div className='user__input'>
                                <LoginPasswordIcon />
                                <Input />
                            </div>
                        </Form.Item>
                    </div>
                    <div className='item__btn'>
                        <Form.Item>
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
                </div>
            </Form>
        </div>
    );
};
