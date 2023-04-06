import { FC, useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import useLanguage from "../../hooks/useLanguage";
import { Button, Space, Table } from "antd";
import { paymentData } from "../../utils/data";
import { PaymentModal } from "../PaymentModal/PaymentModal";
import { EyeIcon } from "../../assets/icons/icons";

export const PaymentTable: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const translate = useLanguage();

    const showModal = () => {
        setModalOpen(true);
    };

    const handleCancel = () => {
        setModalOpen(false);
    };
    const columns = [
        {
            title: `${translate("createDate")}`,
            dataIndex: "date",
            key: "memberType",
        },
        {
            title: `${translate("total")}`,
            dataIndex: "total",
        },
        { title: `${translate("payment")}`, dataIndex: "paymentM" },
        { title: `${translate("type")}`, dataIndex: "type" },
        { title: `${translate("term")}`, dataIndex: "term" },
        { title: `${translate("paid")}`, dataIndex: "paid" },
        {
            title: `${translate("action")}`,
            dataIndex: "",
            render: (record: any) => (
                <Space size={10}>
                    <Button onClick={showModal} className='table__btn'>
                        <EyeIcon />
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <div className='payment-table'>
            <Table
                columns={columns}
                dataSource={paymentData}
            />
            <div className='payment-modal'>
                <PaymentModal
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                />
            </div>
        </div>
    );
};
