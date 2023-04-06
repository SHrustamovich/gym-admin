import { Modal, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { modalI } from "../../pages/types";
import { productData } from "../../utils/data";

export const PaymentModal: FC<modalI> = ({ isModalOpen, handleCancel }) => {
    const translate = useLanguage();

    const columns = [
        {
            title: `${translate("productN")}`,
            dataIndex: "name",
        },
        {
            title: `${translate("productT")}`,
            dataIndex: "productType",
        },
        { title: `${translate("sup")}`, dataIndex: "sup" },
        { title: `${translate("unitP")}`, dataIndex: "price" },
        { title: `${translate("pur")}`, dataIndex: "id" },
        { title: `${translate("disc")}`, dataIndex: "stocks" },
    ];

    return (
        <div className='payment-modal'>
            <Modal
                footer={null}
                closable={false}
                centered
                open={isModalOpen}
                onCancel={handleCancel}
                width={1051}
            >
                <div className='payment-modal__body'>
                    <div className='payment-modal__title'>
                        {translate("info")}
                    </div>
                    <Table
                        columns={columns}
                        dataSource={productData}
                        pagination={false}
                    />
                    <div className='payment-modal__btn'>
                        <button onClick={handleCancel}>
                            {translate("close")}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
