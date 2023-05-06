import { Button, Form, Input, message } from "antd";
import { useContext } from "react";
import { LoginPasswordIcon, PersonIcon } from "../assets/icons/icons";
import { LogoIcon } from "../assets/icons/logo";
import { LoginReqI, UserDataI } from "../context/types";
import { UserContext } from "../context/userContext";
import { usePostRequest } from "../hooks/request";
import { authLogin, domen } from "../utils/urls";
interface LoginAuth {
    username: string;
    password: string;
}

interface LoginResponseI {
    refreshToken: string;
    accessToken: string;
}

export const LogIn = () => {
    const loginRequest = usePostRequest({ url: authLogin });

    const { setTokens } = useContext(UserContext);

    async function onFinish(params: LoginAuth) {
        const { success, response, error } =
            await loginRequest.request<LoginResponseI>({
                data: { username: params.username, password: params.password },
            });
        if (success && !!response) {
            const { refreshToken, accessToken } = response;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            setTokens?.(accessToken, refreshToken);
        } else {
            message.error(error);
        }
    }

    return (
        <div className='login'>
            <div className='login__card'>
                <div className='login__logo'>
                    <LogoIcon />
                </div>
                <p className='login__title'>Welcome</p>
                <Form
                    className='login__form'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <div className='login__item'>
                        <p className='login__label'>Login</p>
                        <Form.Item
                            className='log'
                            name='username'
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input prefix={<PersonIcon />} />
                        </Form.Item>
                    </div>
                    <div className='login__item'>
                        <p className='login__label'>Password</p>
                        <Form.Item
                            className='log'
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input.Password prefix={<LoginPasswordIcon />} />
                        </Form.Item>
                    </div>
                    <div className='login__item'>
                        <Form.Item className='login__btnForm'>
                            <Button className='login__btn' htmlType='submit'>
                                <span> LOGIN</span>
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};
