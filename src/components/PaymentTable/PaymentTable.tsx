import { FC, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { Button, Space, Table } from "antd";
import { PaymentModal } from "../PaymentModal/PaymentModal";
import { EyeIcon } from "../../assets/icons/icons";
import { PaymentTableI } from "../../pages/types";
import moment from "moment";
import { Loading } from "../Loading/Loading";

export const PaymentTable: FC<PaymentTableI> = ({
    response,
    pageTo,
    loading,
}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [paymentId, setPaymentId] = useState<number | null>(null);

    const translate = useLanguage();


    const showModal = (id: number) => {
        setPaymentId(id);
        setModalOpen(true);
    };


    const handleCancel = () => {
        setModalOpen(false);
    };
    const columns = [
        {
            title: `${translate("createDate")}`,
            dataIndex: "created_at",
            key: "memberType",
            render: (record: string) => moment(record).format("LL"),
        },
        {
            title: `${translate("total")}`,
            dataIndex: "total",
        },
        { title: `${translate("payment")}`, dataIndex: "payment_method" },
        { title: `${translate("type")}`, dataIndex: "for_what" },
        { title: `${translate("paid")}`, dataIndex: "paid_by" },
        {
            title: `${translate("action")}`,
            dataIndex: "record",
            render: (record: any) =>
                record.for_what == "products" ? (
                    <Space size={10}>
                        <Button
                            onClick={() => showModal(record.id)}
                            className='table__btn'
                        >
                            <EyeIcon />
                        </Button>
                    </Space>
                ) : null,
        },
    ];
    return (
        <div className='payment-table'>
            {loading ? (
                <Loading />
            ) : (
                <Table
                    columns={columns}
                    className='table-payment'
                    dataSource={response?.data.result.map((item) => ({
                        created_at: item.created_at,
                        total: item.total,
                        payment_method: item.payment_method,
                        for_what: item.for_what,
                        paid_by: item.member.fullname,
                        record: item,
                    }))}
                    pagination={{
                        total: response?.data.total,
                        current: response?.data.page,
                        onChange: (to) => pageTo(to),
                    }}
                />
            )}
            <div className='payment-modal'>
                <PaymentModal
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                    paymentId={paymentId}
                />
            </div>
        </div>
    );
};
