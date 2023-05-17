import { Modal, Table } from "antd";
import { FC } from "react";
import { useLoad } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { modalI } from "../../pages/types";
import { paymentDetailsUrl } from "../../utils/urls";
import { MiniLoading } from "../Loading/MiniLoading";
import { VisitProductDataI, VisitProductI } from "../type";

export const PaymentModal: FC<modalI> = ({
    isModalOpen,
    handleCancel,
    paymentId,
}) => {
    const translate = useLanguage();

    const paymentDetailsList = useLoad<
        VisitProductDataI,
        number | null | undefined
    >(
        {
            url: paymentDetailsUrl(paymentId as number),
        },
        [paymentId]
    );

    const { response, loading } = paymentDetailsList;

    const columns = [
        {
            title: `${translate("productN")}`,
            dataIndex: "product_name",
        },
        {
            title: `${translate("productT")}`,
            dataIndex: "product_type",
        },
        { title: `${translate("sup")}`, dataIndex: "supplier" },
        {
            title: `${translate("unitP")}`,
            dataIndex: "price",
            render: (item: string) => <>{Number(item).toLocaleString()}</>,
        },
        { title: `${translate("pur")}`, dataIndex: "product_count" },
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
                    {loading ? (
                        <MiniLoading />
                    ) : (
                        <Table
                            columns={columns}
                            dataSource={response?.data.result}
                            pagination={false}
                        />
                    )}
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
