import { Button, Drawer, Form, Input, message, Select } from "antd";
import { FC, useEffect } from "react";
import { usePostRequest, usePutRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { MemberShipTypeDrawerI } from "../../pages/types";
import { termData } from "../../utils/data";
import { formLabel } from "../../utils/helpers";
import { membershipTypeEdit, membershipTypepost } from "../../utils/urls";
import { MemberShipTypePostI } from "../type";

export const SettingDrawer: FC<MemberShipTypeDrawerI> = ({
    open,
    onClose,
    req,
    editMemberType,
}) => {
    const translate = useLanguage();
    const [form] = Form.useForm();

    const onCloseDrawer = () => {
        form.resetFields();
        onClose();
    };

    const MemberShipTypePost = usePostRequest<MemberShipTypePostI>({
        url: membershipTypepost,
    });

    const MemberShipTypeEditReq = usePutRequest({
        url: membershipTypeEdit(editMemberType?.id as number),
    });

    const onFinish = async (e: MemberShipTypePostI) => {
        const { name, price, term } = e;

        if (editMemberType) {
            const { success, error } = await MemberShipTypeEditReq.request({
                data: {
                    name,
                    price,
                    term,
                },
            });
            if (success) {
                message.success("MEMBERSHIPTYPE UPDATE SUCCESSFULLY");
                req();
                onCloseDrawer();
            } else {
                message.error(error);
            }
        } else {
            const { success, error } = await MemberShipTypePost.request({
                data: {
                    name,
                    price,
                    term,
                },
            });
            if (success) {
                message.success("MEMBERSHIP TYPE ADDED SUCCESS");
                req();
                onCloseDrawer();
            } else {
                message.error(error);
            }
        }
    };

    useEffect(() => {
        if (editMemberType != null) {
            form.setFieldsValue({
                ...editMemberType,
            });
        }
    }, [editMemberType]);

    return (
        <div className='setting-drawer'>
            <Drawer open={open} onClose={onCloseDrawer} closable={false}>
                <div className='setting-drawer__body'>
                    <div className='setting-drawer__title'>
                        {translate("memberType")}
                    </div>
                    <Form onFinish={onFinish} form={form}>
                        <div className='item'>
                            <p className='label'>{translate("memberType")}</p>
                            <Form.Item {...formLabel("Name", "name")}>
                                <Input placeholder={translate("memberType")} />
                            </Form.Item>
                        </div>
                        <div className='item'>
                            <p className='label'>{translate("price")}</p>
                            <Form.Item {...formLabel("Price", "price")}>
                                <Input placeholder={translate("price")} />
                            </Form.Item>
                        </div>
                        <div className='item'>
                            <p className='label'>{translate("term")}</p>
                            <Form.Item {...formLabel("Term", "term")}>
                                <Select
                                    placeholder={translate("select")}
                                    options={termData.map((item) => ({
                                        value: item.term,
                                        label: item.term,
                                    }))}
                                />
                            </Form.Item>
                        </div>
                        <div className='item'>
                            <Form.Item className='member-driver__btn'>
                                <Button
                                    className='member-driver__cancel'
                                    onClick={() => onCloseDrawer()}
                                >
                                    {translate("cancel")}
                                </Button>
                                <Button
                                    htmlType='submit'
                                    className='member-driver__submit'
                                    loading={MemberShipTypePost.loading}
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
