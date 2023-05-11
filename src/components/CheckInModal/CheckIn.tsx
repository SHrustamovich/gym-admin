import { Button, Form, Input, InputNumber, InputRef, Modal } from "antd";
import React, { FC, useEffect, useRef, useState } from "react";
import { CheckInModalI } from "../../context/types";
import { Timer } from "../Taymer/Taymer";

let currentOtpIndex: number = 0;

export const CheckIn: FC<CheckInModalI> = ({ checkInModal, onCancelModal }) => {
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    const [activeOtp, setActiveOtp] = useState<number>(0);

    const onFinish = () => {
        console.log("salom");
    };

    const handlyChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        const newOtp: string[] = [...otp];

        newOtp[currentOtpIndex] = value.substring(value.length - 1);

        if (!value) setActiveOtp(currentOtpIndex - 1);
        else setActiveOtp(currentOtpIndex + 1);

        // setActiveOtp(currentOtpIndex + 1);
        setOtp(newOtp);
    };

    const inputRef = useRef<InputRef | null>(null);

    const handlyKeyDown = (
        { key }: React.KeyboardEvent<HTMLInputElement>,
        item: number
    ) => {
        currentOtpIndex = item;
        if (key == "Backspace") setActiveOtp(currentOtpIndex - 1);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOtp]);

    console.log(otp);
    return (
        <div className='check-in'>
            <Modal
                centered
                open={checkInModal}
                footer={null}
                onCancel={onCancelModal}
            >
                <Form onFinish={onFinish} className='check-in__form'>
                    <div className='check-in__title'>PIN CODE</div>
                    <Form.Item className='check-in__item input'>
                        {otp.map((_, item) => (
                            <Input
                                ref={item === activeOtp ? inputRef : null}
                                className='check-in__input'
                                onChange={handlyChange}
                                value={otp[item]}
                                onKeyDown={(e) => handlyKeyDown(e, item)}
                            />
                        ))}
                    </Form.Item>
                    <Form.Item className='check-in__item'>
                        <button type='submit' className='check-in__btn'>
                            Submit
                        </button>
                        <div className='check-in__timer'>
                            <Timer />
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};
