import { Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { InventoryTableI } from "../../pages/types";
import { Loading } from "../Loading/Loading";

export const InventoryTable: FC<InventoryTableI> = ({
    response,
    pageTo,
    loading,
}) => {
    const translate = useLanguage();

    const columns = [
        {
            title: `${translate("productT")}`,
            dataIndex: "product_type",
        },
        {
            title: `${translate("productN")}`,
            dataIndex: "product_name",
        },
        { title: `${translate("sup")}`, dataIndex: "supplier" },
        { title: `${translate("stock")}`, dataIndex: "stocks" },
        {
            title: `${translate("status")}`,
            dataIndex: "status",
            key: "status",
            render: (status: any) => (
                <>
                    <p className='status'>{status}</p>
                </>
            ),
        },
    ];
    return (
        <div className='inven-table'>
            {loading ? (
                <Loading />
            ) : (
                <Table
                    columns={columns}
                    dataSource={response?.data.result}
                    pagination={{
                        total: response?.data.total,
                        current: response?.data.page,
                        onChange: (to) => pageTo(to),
                    }}
                />
            )}
        </div>
    );
};
