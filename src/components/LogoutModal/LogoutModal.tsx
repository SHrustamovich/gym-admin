import { Modal } from "antd";
import { FC } from "react";
import { LogoutModalI } from "../../context/types";
import { usePostRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { logout } from "../../utils/urls";

export const LogoutModal: FC<LogoutModalI> = ({ handleCancel, openMadal }) => {
    const translate = useLanguage();
    const logoutReq = usePostRequest({ url: logout });
    const handleOk = async () => {
        const response = await logoutReq.request();
        if (response.success) {
            
        }
    };
    return (
        <div className='logout-modal'>
            <Modal
                centered
                title={translate("exit")}
                open={openMadal}
                onOk={handleOk}
                onCancel={handleCancel}
            />
        </div>
    );
};
