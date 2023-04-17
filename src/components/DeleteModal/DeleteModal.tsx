import { Modal } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { deleteModalI } from "../../pages/types";

export const DeleteModal: FC<deleteModalI> = ({
    title,
    visible,
    onOkDelete,
    onCancel,
}) => {
    const translate = useLanguage();

    return (
        <div className='delete-modal'>
            <Modal
                title={title}
                centered
                open={visible}
                onOk={onOkDelete}
                okText={translate("yes")}
                cancelText={translate("no")}
                okType='danger'
                onCancel={onCancel}
            />
        </div>
    );
};
