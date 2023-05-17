import { Button, Modal } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { deleteModalI } from "../../pages/types";

export const DeleteModal: FC<deleteModalI> = ({
    title,
    visible,
    onOkDelete,
    onCancel,
    loading,
}) => {
    const translate = useLanguage();

    const handlyBtn = () => {
        onOkDelete();
    };

    const handlyCancel = () => {
        onCancel();
    };

    return (
        <div className='delete-modal'>
            <Modal
                title={title}
                centered
                open={visible}
                okType='danger'
                onCancel={onCancel}
                footer={false}
            >
                <div className='delete__btn'>
                    <Button onClick={handlyCancel} danger disabled={loading}>
                        {translate("no")}
                    </Button>
                    <Button loading={loading} onClick={handlyBtn}>
                        {translate("yes")}
                    </Button>
                </div>
            </Modal>
        </div>
    );
};
