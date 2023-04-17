import { FC, useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import useLanguage from "../../hooks/useLanguage";
import { Button, Space, Table } from "antd";
import { paymentData } from "../../utils/data";
import { PaymentModal } from "../PaymentModal/PaymentModal";
import { EyeIcon } from "../../assets/icons/icons";
import { PaymentTableI } from "../../pages/types";

export const PaymentTable: FC<PaymentTableI> = ({ response }) => {
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
            dataIndex: "created_at",
            key: "memberType",
        },
        {
            title: `${translate("total")}`,
            dataIndex: "total",
        },
        { title: `${translate("payment")}`, dataIndex: "payment_method" },
        { title: `${translate("type")}`, dataIndex: "for_what" },
        { title: `${translate("term")}`, dataIndex: "moderator_id" },
        { title: `${translate("paid")}`, dataIndex: "for_what" },
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
            <Table columns={columns} dataSource={response?.data.result} />
            <div className='payment-modal'>
                <PaymentModal
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                />
            </div>
        </div>
    );
};
