import { Button, Drawer, Form, Input, Select } from "antd";
import { FC, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { draverI } from "../../pages/types";
import { cardData } from "../../utils/data";

export const SalesDrawer: FC<draverI> = ({ open, onClose }) => {
    const [price, setPrice] = useState(23);
    const translate = useLanguage();
    return (
        <div className='sales-drawer'>
            <Drawer
                placement='right'
                onClose={onClose}
                open={open}
                closable={false}
                // width={305}
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
                                            {item.title}
                                        </p>
                                        <p className='card__brand   '>
                                            Brand:{item.brand}
                                        </p>
                                    </div>
                                    <div className='cards__counter'>
                                        <p className='cards__price'>{price}$</p>
                                        <div className='cards__btns'>
                                            <button className='cards__btn'>
                                                -
                                            </button>
                                            <span className='card__title'>
                                                1
                                            </span>
                                            <button className='cards__btn'>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                                    className='member-driver__select'
                                    // onChange={handleChange}
                                    options={[
                                        { value: "jack", label: "Jack" },
                                        { value: "lucy", label: "Lucy" },
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
            </Drawer>
        </div>
    );
};
