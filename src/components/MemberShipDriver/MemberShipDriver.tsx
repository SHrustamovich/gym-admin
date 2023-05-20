import { Button, DatePicker, Drawer, Form, message, Select } from "antd";
import { FC, useEffect, useMemo } from "react";
import { useLoad, usePostRequest, usePutRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import {
    memberShipPost,
    memberShipPut,
    membershipTypeUrl,
} from "../../utils/urls";
import {
    MemberShipTypeEditI,
    MemberShipTypeI,
    MemberShipTypePostI,
} from "../type";
import { MemberShipDraverI } from "../../pages/types";
import moment from "moment";
import { formLabel } from "../../utils/helpers";

export const MemberShipDriver: FC<MemberShipDraverI> = ({
    open,
    onClose,
    data,
    req,
    memberShipEdit,
}) => {
    const translate = useLanguage();

    const [form] = Form.useForm();
    const priceA = Form.useWatch("membership_type_id", form);

    const onCloseDriver = () => {
        form.resetFields();
        onClose();
    };

    const memberShipTypeReq = useLoad<MemberShipTypeI>({
        url: membershipTypeUrl,
    });
    const { response } = memberShipTypeReq;

    const memberShipPutReq = usePutRequest<Partial<MemberShipTypeEditI>>({
        url: memberShipPut(memberShipEdit?.id as number),
    });

    const memberShipPostReq = usePostRequest<MemberShipTypeEditI>({
        url: memberShipPost,
    });

    const { loading } = memberShipPostReq;

    const priceB = useMemo(() => {
        const a = response?.data.result.find((item) => item.id === priceA);
        return a ? a.price : 0;
    }, [priceA]);

    const MemberShipFinish = async (e: MemberShipTypePostI) => {
        const {
            membership_type_id,
            term,
            start_date,
            end_date,
            payment_method,
        } = e;

        if (memberShipEdit) {
            const { success, error } = await memberShipPutReq.request({
                data: {
                    membership_type_id,
                    term,
                    start_date,
                    end_date,
                    payment_method,
                },
            });
            if (success) {
                onCloseDriver();
                req?.();
                message.success("MEMBERSHIP UPDATE SUCCESSFULLY");
            }
            if (error) {
                onCloseDriver();
                message.error("SOMETHING WENT WRONG");
            }
        } else {
            const { success, error } = await memberShipPostReq.request({
                data: {
                    membership_type_id,
                    member_id: data?.data.id,
                    start_date,
                    payment_method,
                },
            });
            if (success) {
                message.success("MEMBERSHIP ADDED SUCCESSFULLY");
                req?.();
                onCloseDriver();
            } else {
                message.error(error);
            }
        }
    };

    useEffect(() => {
        if (memberShipEdit != null) {
            form.setFieldsValue({
                membership_type_id: memberShipEdit.membership_type.id,
                start_date: moment(memberShipEdit.start_date),
                payment_method: memberShipEdit.payment_method,
            });
        }
    }, [memberShipEdit]);

    return (
        <div className='member-driver'>
            <Drawer
                placement='right'
                onClose={onCloseDriver}
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
                                    {translate("membershipTypeName")}
                                </div>
                                <Form.Item
                                    name='membership_type_id'
                                    rules={[
                                        {
                                            required: true,
                                            message: `${translate(
                                                "pleaseS"
                                            )} ${translate(
                                                "membershipTypeName"
                                            )}`,
                                        },
                                    ]}
                                >
                                    <Select
                                        placeholder={translate("select")}
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
                                    {translate("date")}
                                </div>
                                <Form.Item
                                    {...formLabel(
                                        `${translate("pleaseS")} ${translate(
                                            "date"
                                        )}`,
                                        "start_date"
                                    )}
                                >
                                    <DatePicker
                                        placeholder={translate("selectDate")}
                                    />
                                </Form.Item>
                            </div>
                            <div className='drawer__item'>
                                <div className='drawer__label'>
                                    {translate("payment")}
                                </div>
                                <Form.Item
                                    name='payment_method'
                                    rules={[
                                        {
                                            required: true,
                                            message: `${translate(
                                                "pleaseS"
                                            )} ${translate("payment")}`,
                                        },
                                    ]}
                                >
                                    <Select
                                        placeholder={translate("paymentS")}
                                        className='member-driver__select'
                                        options={[
                                            { value: "cash", label: "cash" },
                                            {
                                                value: "credit_card",
                                                label: "credit_card",
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </div>
                            <div className='drawer__item'>
                                <p className='member-driver__price'>
                                    {translate("total")}:{priceB}
                                </p>
                            </div>
                            <div className='drawer__item'>
                                <Form.Item className='member-driver__btn'>
                                    <Button
                                        className='member-driver__cancel'
                                        disabled={
                                            memberShipEdit
                                                ? memberShipPutReq.loading
                                                : loading
                                        }
                                        onClick={() => onCloseDriver()}
                                    >
                                        {translate("cancel")}
                                    </Button>
                                    <Button
                                        htmlType='submit'
                                        className='member-driver__submit'
                                        loading={
                                            memberShipEdit
                                                ? memberShipPutReq.loading
                                                : loading
                                        }
                                    >
                                        {memberShipEdit
                                            ? translate("update")
                                            : translate("submit")}
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
