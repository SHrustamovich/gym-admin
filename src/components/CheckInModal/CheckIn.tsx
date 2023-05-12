import {Modal } from "antd";
import { FC} from "react";
import { CheckInModalI } from "../../context/types";
import useLanguage from "../../hooks/useLanguage";

let currentOtpIndex: number = 0;

export const CheckIn: FC<CheckInModalI> = ({ checkInModal, onCancelModal,CheckInOk }) => {

    const translate = useLanguage()

    const handlyCancel = () => {
        onCancelModal();
    };
   

    return (
        <div className='check-in'>
            <Modal
                title={translate("")}
                centered
                open={checkInModal}
                onCancel={handlyCancel}
                onOk={CheckInOk}
            />
        </div>
    );
};
