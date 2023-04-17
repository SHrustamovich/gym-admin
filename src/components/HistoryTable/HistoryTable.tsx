import { Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { HistoryTableI } from "../../pages/types";

export const HistoryTable: FC<HistoryTableI> = ({
    response,
    loading,
    pageTo,
}) => {
    const translate = useLanguage();

    const columns = [
        {
            title: `${translate("membersName")}`,
            dataIndex: "checked_in_by",
            key: "membersName",
        },
        {
            title: `${translate("visitTime")}`,
            dataIndex: "created_at",
            key: "visitTime",
        },
        { title: `${translate("visitDate")}`, dataIndex: "date" },
    ];
    return (
        <div className='history-table'>
            <Table
                columns={columns}
                dataSource={response?.data.result}
                pagination={{
                    total: response?.data.total,
                    current: response?.data.page,
                    onChange: (to) => pageTo(to),
                }}
            />
        </div>
    );
};
