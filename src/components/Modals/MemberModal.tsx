import { isDisabled } from "@testing-library/user-event/dist/utils";
import {
    Button,
    DatePicker,
    Form,
    Input,
    message,
    Modal,
    Radio,
    Select,
} from "antd";
import { FC, useEffect } from "react";
import { CaleIcon, PersonIcon, PhoneIcon } from "../../assets/icons/icons";
import { useLoad, usePostRequest, usePutRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { modalI } from "../../pages/types";
import { memberPost, membershipGet, membersPut } from "../../utils/urls";
import { MemberPostType, membersEditI, MemberShipType } from "../type";
import moment from "moment";
import { phoneNamberCheck } from "../../utils/helpers";

export const MemberModal: FC<modalI> = ({
    isModalOpen,
    handleCancel,
    request,
    editMembers,
}) => {
    const membershipGetReq = useLoad<MemberShipType>({ url: membershipGet });

    const { response } = membershipGetReq;

    const membersPost = usePostRequest({ url: memberPost });

    const membersPutReq = usePutRequest<membersEditI>({
        url: membersPut(editMembers?.id as number),
    });
    const [form] = Form.useForm();
    const phoneValue = Form.useWatch("phone", form);

    const { loading } = membersPost;

    const handlyCancel = () => {
        form.resetFields();
        handleCancel();
    };

    const removeModal = () => {
        form.resetFields();
        handleCancel();
    };

    const translate = useLanguage();

    const memberFinish = async (e: MemberPostType) => {
        const { fullname, phone, gender, date_of_birth } = e;
        let time = new Date(date_of_birth).toISOString();
        if (editMembers) {
            const { success, error } =
                await membersPutReq.request<membersEditI>({
                    data: {
                        fullname,
                        phone,
                        gender,
                        date_of_birth,
                    },
                });
            if (success) {
                handleCancel();
                message.success("MEMBER UPDATE SUCCESSFULLY");
            }
            if (error) {
                handleCancel();
                message.error("SOMETHING WENT WRONG");
            }
        } else {
            const { success, error } =
                await membersPost.request<MemberPostType>({
                    data: {
                        fullname,
                        phone,
                        gender,
                        date_of_birth: time,
                    },
                });
            if (success) {
                message.success("MEMBER ADDED SUCCESSFULLY");
                handleCancel();
                request?.();
                form.resetFields();
            }
            if (error) {
                message.error("SOMETHING WENT WRONG");
                handleCancel();
                form.resetFields();
            }
        }
    };

    useEffect(() => {
        if (editMembers != null) {
            form.setFieldsValue({
                ...editMembers,
                date_of_birth: moment(editMembers.date_of_birth),
            });
        }
    }, [editMembers]);

    useEffect(() => {
        if (phoneValue) {
            form.setFieldValue("phone", phoneNamberCheck(phoneValue));
        }
    }, [phoneValue]);

    return (
        <div className='modal-members'>
            <Modal
                open={isModalOpen}
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
                                        format='YYYY-MM-DD'
                                    />
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
