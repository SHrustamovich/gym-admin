import { isDisabled } from "@testing-library/user-event/dist/utils";
import {
    Button,
    DatePicker,
    Form,
    Input,
    message,
    Modal,
    Radio,
    RadioChangeEvent,
    Select,
} from "antd";
import { FC, useState } from "react";
import { CaleIcon, PersonIcon, PhoneIcon } from "../../assets/icons/icons";
import { useLoad, usePostRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { modalI } from "../../pages/types";
import { memberPost, membershipGet } from "../../utils/urls";
import { memberShipResII, membersPostI } from "../type";

export const MemberModal: FC<modalI> = ({ isModalOpen, handleCancel }) => {
    const [form] = Form.useForm();

    const membershipGetReq = useLoad<memberShipResII>({ url: membershipGet });

    const { response } = membershipGetReq;

    const membersPost = usePostRequest({ url: memberPost });

    const { loading, request } = membersPost;

    const handlyCancel = () => {
        form.resetFields();
        handleCancel();
    };

    const removeModal = () => {
        form.resetFields();
        handleCancel();
    };

    const translate = useLanguage();

    const memberFinish = async (e: membersPostI) => {
        const { fullname, phone, gender, date_of_birth, membership_id } = e;
        let time = new Date(date_of_birth).toISOString();
        console.log(fullname, phone, gender, time, membership_id);
        const { success, error } = await membersPost.request<membersPostI>({
            data: {
                fullname,
                phone,
                gender,
                date_of_birth: time,
                membership_id,
            },
        });
        if (success) {
            message.success("MEMBER ADDED SUCCESSFULLY");
        }
        if (error) {
            message.error("SOMETHING WENT WRONG");
        }
    };

    return (
        <div className='modal-members'>
            <Modal
                // centered
                open={isModalOpen}
                // onOk={handleOk}
                onCancel={removeModal}
                width={825}
                footer={null}
            >
                <div className='modal__main'>
                    <div className='modal__title'>{translate("newadd")}</div>
                    <Form
                        name='complex-form'
                        className='modal__form'
                        onFinish={memberFinish}
                        form={form}
                    >
                        <div className='modal__info'>
                            <div className='modal__name'>
                                <div className='modal__text'>
                                    {translate("name")}
                                </div>
                                <Form.Item
                                    className='modal__item'
                                    name='fullname'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <Input prefix={<PersonIcon />} />
                                </Form.Item>
                            </div>
                            <div className='modal__name'>
                                <div className='modal__text'>
                                    {translate("phone")}
                                </div>
                                <Form.Item
                                    className='modal__item'
                                    name='phone'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <Input prefix={<PhoneIcon />} />
                                </Form.Item>
                            </div>
                            <div className='modal__radio'>
                                <div className='modal__text'>
                                    {translate("gender")}
                                </div>
                                <Form.Item
                                    className='modal__gender modal__gander_transparent'
                                    name='gender'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <Radio.Group>
                                        <Radio value={"male"}>
                                            {translate("male")}
                                        </Radio>
                                        <Radio value={"female"}>
                                            {translate("female")}
                                        </Radio>
                                    </Radio.Group>
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
                                    name='date_of_birth'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        suffixIcon={<CaleIcon />}
                                        format='YYYY/MM/DD'
                                    />
                                </Form.Item>
                            </div>
                            <div className='modal__name'>
                                <div className='modal__text'>
                                    {translate("memberType")}
                                </div>
                                <Form.Item
                                    className='modal__item'
                                    name='membership_id'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <Select
                                        className='members__select'
                                        placeholder='select'
                                        options={response?.data?.result.map(
                                            (item) => ({
                                                label: item.membership_type
                                                    .name,
                                                value: item.id,
                                            })
                                        )}
                                    />
                                </Form.Item>
                            </div>

                            <div className='modal__btn'>
                                <Button
                                    className='member-modal__cancel'
                                    disabled={loading}
                                    onClick={handlyCancel}
                                >
                                    {translate("cancel")}
                                </Button>
                                <Button
                                    className='member-modal__create'
                                    htmlType='submit'
                                    loading={loading}
                                >
                                    {translate("create")}
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};
