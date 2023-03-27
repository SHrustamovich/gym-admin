import { DatePicker, Form, Input, Modal, Radio, RadioChangeEvent } from "antd";
import { FC, useState } from "react";
import { CaleIcon, PersonIcon, PhoneIcon } from "../../assets/icons/icons";
import useLanguage from "../../hooks/useLanguage";
import { modalI } from "../../pages/types";

export const MemberModal: FC<modalI> = ({ isModalOpen, handleCancel }) => {
    const [value, setValue] = useState(1);

    const handleOk = () => {
        console.log("ok");
    };

    const removeModal = () => {
        handleCancel();
    };

    const onChange = (e: RadioChangeEvent) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    const translate = useLanguage();

    return (
        <div className='modal-members'>
            <Modal
                // centered
                open={isModalOpen}
                onOk={handleOk}
                onCancel={removeModal}
                width={825}
            >
                <div className='modal__main'>
                    <div className='modal__title'>{translate("newadd")}</div>
                    <Form className='modal__form'>
                        <div className='modal__info'>
                            <div className='modal__name'>
                                <div className='modal__text'>
                                    {translate("name")}
                                </div>
                                <Form.Item
                                    className='modal__item'
                                    name='username'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <PersonIcon />
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className='modal__name'>
                                <div className='modal__text'>
                                    {translate("phone")}
                                </div>
                                <Form.Item
                                    className='modal__item'
                                    name='username'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <PhoneIcon />
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='modal__info'>
                            <div className='modal__name'>
                                <div className='modal__text'>
                                    {translate("bday")}
                                </div>
                                <Form.Item
                                    className='modal__item'
                                    name='username'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <CaleIcon />
                                    <DatePicker />
                                </Form.Item>
                            </div>
                            <div className='modal__radio'>
                                <div className='modal__text'>
                                    {translate("gender")}
                                </div>
                                <Form.Item
                                    className='modal__gender modal__gander_transparent'
                                    name='username'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <Radio.Group
                                        onChange={onChange}
                                        value={value}
                                    >
                                        <Radio value={1}>
                                            {translate("male")}
                                        </Radio>
                                        <Radio value={2}>
                                            {translate("female")}
                                        </Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};
