import { Modal } from "antd";
import { FC } from "react";
import { LogoutModalI } from "../../context/types";
import useLanguage from "../../hooks/useLanguage";

export const LogoutModal: FC<LogoutModalI> = ({ handleCancel, openMadal }) => {
    const translate = useLanguage();
    const handleOk = () => {
        console.log("Logout");
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
