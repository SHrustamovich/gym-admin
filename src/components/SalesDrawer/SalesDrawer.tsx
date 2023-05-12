import { Button, Drawer, Form, message, Select } from "antd";
import { FC, useMemo } from "react";
import { useCardContext } from "../../context/karzinkaContext";
import { useLoad, usePostRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { PosDrawer } from "../../pages/types";
import { memberGet, paymentList } from "../../utils/urls";
import { Loading } from "../Loading/Loading";
import { MemberType, PaymentPostI } from "../type";

export const SalesDrawer: FC<PosDrawer> = ({ open, onClose, load }) => {
    const translate = useLanguage();

    const { cardData, decrementCount, incrementCount } = useCardContext();

    const PaymentMemberIdList = useLoad<MemberType>({ url: memberGet });

    const { response } = PaymentMemberIdList;

    const paymentListReq = usePostRequest<PaymentPostI>({ url: paymentList });

    const handlyDec = (id: number) => {
        decrementCount(id);
    };

    const handlyInc = (id: number) => {
        incrementCount(id);
    };

    const totalMoney = useMemo(() => {
        if (!!cardData.length) {
            return cardData
                ?.map((item) => +item.price)
                .reduce((acc, cur) => acc + cur);
        }
    }, [cardData]);

    const onFinish = async (e: PaymentPostI) => {
        const { member_id, payment_method, paid_status } = e;
        const products = cardData.map((item) => ({
            product_id: item.id,
            product_count: item.count,
        }));
        if (cardData.length) {
            const { success, error } = await paymentListReq.request({
                data: {
                    payment_method: payment_method,
                    paid_status: paid_status,
                    total: totalMoney,
                    member_id: member_id,
                    products: products,
                    for_what: "products",
                },
            });
            if (success) {
                message.success("PRODUCT ADDED SUCCESSFULLY");
                onClose();
                
            } else {
                console.log(error);
                // message.error(error);
            }
        } else {
            message.error("Product null");
        }
    };

    return (
        <div className='sales-drawer'>
            {load ? (
                <Loading />
            ) : (
                <Drawer
                    placement='right'
                    onClose={onClose}
                    open={open}
                    closable={false}
                    className='sales-drawer__main'
                >
                    <div className='sales-drawer__body'>
                        <div className='sales-drawer__title'>
                            {translate("summary")}
                        </div>
                        <div className='sales-drawer__allCard'>
                            {cardData?.map((item) => (
                                <div
                                    className='sales-drawer__card cards'
                                    key={item.id}
                                >
                                    <div className='cards__top'></div>
                                    <div className='cards__main'>
                                        <div className='cards__info'>
                                            <p className='card__title'>
                                                {item.product_name}
                                            </p>
                                            <p className='card__brand'>
                                                Brand:{item.supplier}
                                            </p>
                                        </div>
                                        <div className='cards__counter'>
                                            <p className='cards__price'>
                                                {Math.ceil(Number(item.price))}
                                            </p>
                                            <div className='cards__btns'>
                                                <button
                                                    className='cards__btn'
                                                    onClick={() =>
                                                        handlyDec(item.id)
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className='card__title'>
                                                    {item.count}
                                                </span>
                                                <button
                                                    className='cards__btn'
                                                    onClick={() =>
                                                        handlyInc(item.id)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='sales__fixed'>
                            <div className='sales-drawer__total'>
                                <div className='cards__price'>
                                    {translate("total")}:{totalMoney} sum
                                </div>
                            </div>
                            <Form
                                className='sales-drawer__form'
                                onFinish={onFinish}
                            >
                                <div className='sales-drawer__item'>
                                    <p className='sales-drawer__label'>
                                        {translate("member")}
                                    </p>
                                    <Form.Item
                                        name='member_id'
                                        rules={[
                                            {
                                                required: true,
                                                message: translate("valName"),
                                            },
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder='Select a member'
                                            className='member-driver__select'
                                            optionFilterProp='children'
                                            filterOption={(input, option) =>
                                                (option?.label ?? "")
                                                    .toLowerCase()
                                                    .includes(
                                                        input.toLowerCase()
                                                    )
                                            }
                                            options={response?.data.result.map(
                                                (item) => ({
                                                    value: item.id,
                                                    label: item.fullname,
                                                })
                                            )}
                                        />
                                    </Form.Item>
                                </div>
                                <div className='sales-drawer__item'>
                                    <p className='sales-drawer__label'>
                                        {translate("payment")}
                                    </p>
                                    <Form.Item
                                        name='payment_method'
                                        rules={[
                                            {
                                                required: true,
                                                message: translate("valName"),
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder='select'
                                            className='member-driver__select'
                                            options={[
                                                {
                                                    value: "cash",
                                                    label: "cash",
                                                },
                                                {
                                                    value: "credit_card",
                                                    label: "Credit card",
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                                <div className='sales-drawer__item'>
                                    <p className='sales-drawer__label'>
                                        {translate("payment")}
                                    </p>
                                    <Form.Item
                                        name='paid_status'
                                        rules={[
                                            {
                                                required: true,
                                                message: translate("valName"),
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder='select'
                                            className='member-driver__select'
                                            options={[
                                                {
                                                    value: "paid",
                                                    label: "Paid",
                                                },
                                                {
                                                    value: "unpaid",
                                                    label: "unpaid",
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                </div>
                                <Form.Item className='sales-drawer__button'>
                                    <Button
                                        htmlType='submit'
                                        className='sales-drawer__btn'
                                    >
                                        {translate("mPayment")}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Drawer>
            )}
        </div>
    );
};
