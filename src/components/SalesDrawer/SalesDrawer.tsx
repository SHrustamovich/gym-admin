import { Button, Drawer, Form, Input, Select } from "antd";
import { FC, useState } from "react";
import { useCardContext } from "../../context/karzinkaContext";
import useLanguage from "../../hooks/useLanguage";
import { draverI, PosDrawer } from "../../pages/types";
import { cardData } from "../../utils/data";
import { Loading } from "../Loading/Loading";

export const SalesDrawer: FC<PosDrawer> = ({ open, onClose, load }) => {
    const [price, setPrice] = useState(23);
    const translate = useLanguage();

    const { cardData, decrementCount, incrementCount } = useCardContext();

    const handlyDec = (id: number) => {
        decrementCount(id);
    };

    const handlyInc = (id: number) => {
        incrementCount(id);
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
                            {cardData.map((item) => (
                                <div
                                    className='sales-drawer__card cards'
                                    key={item.id}
                                >
                                    <div className='cards__top'></div>
                                    <div className='cards__main'>
                                        <div className='cards__info'>
                                            <p className='card__title'>
                                                {item.product_type}
                                            </p>
                                            <p className='card__brand   '>
                                                Brand:{item.product_type}
                                            </p>
                                        </div>
                                        <div className='cards__counter'>
                                            <p className='cards__price'>
                                                {price}$
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
                            <div className="sales__fixed">
                            <div className='sales-drawer__total'>
                            <div className='cards__price'>
                                {translate("total")}:1234 $
                            </div>
                        </div>
                        <Form className='sales-drawer__form'>
                            <div className='sales-drawer__item'>
                                <p className='sales-drawer__label'>
                                    {translate("member")}
                                </p>
                                <Form.Item
                                    name='name'
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
                            <div className='sales-drawer__item'>
                                <p className='sales-drawer__label'>
                                    {translate("payment")}
                                </p>
                                <Form.Item
                                    name='select'
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
                                            { value: "cash", label: "cash" },
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
                                    name='select_paid'
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
                                            { value: "paid", label: "Paid" },
                                            {
                                                value: "no_paid",
                                                label: "No paid",
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
