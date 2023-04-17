import { Button, DatePicker, Drawer, Form, Input, message, Select } from "antd";
import { FC } from "react";
import { useLoad, usePostRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { draverI, MemberShipDraverI } from "../../pages/types";
import { memberShipPost, membershipType } from "../../utils/urls";
import { MemberShipTypeI, MemberShipTypePostI } from "../type";

export const MemberShipDriver: FC<MemberShipDraverI> = ({
    open,
    onClose,
    data,
    req,
}) => {
    const translate = useLanguage();

    const [form] = Form.useForm();

    const memberShipTypeReq = useLoad<MemberShipTypeI>({ url: membershipType });
    const { response, request } = memberShipTypeReq;

    const memberShipPostReq = usePostRequest({ url: memberShipPost });

    const { loading } = memberShipPostReq;

    const MemberShipFinish = async (e: MemberShipTypePostI) => {
        const { membership_type_id, term, start_date, end_date } = e;

        const { success, error } = await memberShipPostReq.request({
            data: {
                membership_type_id,
                member_id: data?.data.id,
                term,
                start_date,
                end_date,
            },
        });
        if (success) {
            message.success("MEMBERSHIP ADDED SUCCESSFULLY");
            onClose();
            req?.();
            form.resetFields();
        }
        if (error) {
            message.error("SOMETHING WENT WRONG");
            onClose();
            form.resetFields();
        }
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
                        <Form
                            className='member-driver__form'
                            onFinish={MemberShipFinish}
                            form={form}
                        >
                            <div className='drawer__item'>
                                <div className='drawer__label'>
                                    {translate("membershipType")}
                                </div>
                                <Form.Item
                                    name='membership_type_id'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate("valName"),
                                        },
                                    ]}
                                >
                                    <Select
                                        className='member-driver__select'
                                        options={response?.data.result.map(
                                            (item) => ({
                                                value: item.id,
                                                label: item.name,
                                            })
                                        )}
                                    />
                                </Form.Item>
                            </div>
                            <div className='drawer__item'>
                                <div className='drawer__label'>
                                    {translate("term")}
                                </div>
                                <Form.Item
                                    name='term'
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
                                    name='start_date'
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
                                    {translate("end")}
                                </div>
                                <Form.Item
                                    name='end_date'
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
                                        loading={loading}
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
