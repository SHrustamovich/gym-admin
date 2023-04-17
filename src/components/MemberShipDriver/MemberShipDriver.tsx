import { Button, DatePicker, Drawer, Form, Input, Select } from "antd";
import { FC } from "react";
import { useLoad } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { draverI } from "../../pages/types";
import { membershipType } from "../../utils/urls";
import { MemberShipTypeI } from "../type";

export const MemberShipDriver: FC<draverI> = ({ open, onClose }) => {
    const translate = useLanguage();

  
    const memberShipTypeReq = useLoad<MemberShipTypeI>({ url: membershipType });
    const { response, request, loading } = memberShipTypeReq;
    console.log(response);
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
                                    name='startDate'
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
                                    name='endDate'
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
