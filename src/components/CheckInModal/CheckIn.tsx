import { message, Modal } from "antd";
import { FC } from "react";
import { CheckInModalI } from "../../context/types";
import { usePostRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { checkInUrl } from "../../utils/urls";
import { CheckInI } from "../type";

let currentOtpIndex: number = 0;

export const CheckIn: FC<CheckInModalI> = ({
    checkInModal,
    onCancelModal,
    checkInIndex,
}) => {
    const translate = useLanguage();

    const checkInPost = usePostRequest<CheckInI>({
        url: checkInUrl,
    });

    const handlyCancel = () => {
        onCancelModal();
    };

    const checkInOk = async () => {
        const { success, error } = await checkInPost.request({
            data: {
                member_id: checkInIndex,
            },
        });
        if (success) {
            message.success("CECKIN ADDED SUCCESSFULLY");
            onCancelModal();
        } else {
            message.error(error);
            onCancelModal();
        }
    };

    return (
        <div className='check-in'>
            <Modal
                title={translate("checkIn")}
                centered
                open={checkInModal}
                onCancel={handlyCancel}
                onOk={checkInOk}
            />
        </div>
    );
};
