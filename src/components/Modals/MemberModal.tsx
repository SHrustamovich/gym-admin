import {
    Button,
    DatePicker,
    Form,
    Input,
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
import { memberGet, memberPost, membershipGet } from "../../utils/urls";
import {
    memberShipResI,
    memberShipResII,
    membersPostI,
    membersReqI,
    membersResI,
} from "../type";

export const MemberModal: FC<modalI> = ({ isModalOpen, handleCancel }) => {
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();

    const membershipGetReq = useLoad<memberShipResII>({ url: membershipGet });

    const { response, loading } = membershipGetReq;

    const membersPost = usePostRequest({ url: memberPost });

    const removeModal = () => {
        handleCancel();
    };

    const onChange = (e: RadioChangeEvent) => {
        form.setFieldValue("gender", e.target.value);
    };

    const dateChange = (event: any) => {
        form.setFieldValue("date_of_birth", event);
    };
    const translate = useLanguage();

    const memberFinish = async (e: membersPostI) => {
        const { fullname, phone, gender, date_of_birth, membership_id } = e;
        const { success, error } = await membersPost.request<membersPostI>({
            data: {
                fullname,
                phone,
                gender,
                date_of_birth,
                membership_id,
            },
        });
        if (success) {
            alert("success");
        }
        if (error) {
            alert("error");
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
                                    <Radio.Group
                                        onChange={onChange}
                                        value={value}
                                    >
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
                                        onChange={dateChange}
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
                                <Button className='member-modal__cancel'>
                                    {translate("cancel")}
                                </Button>
                                <Button
                                    className='member-modal__create'
                                    htmlType='submit'
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
