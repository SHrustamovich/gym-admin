import { Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { visitData } from "../../utils/data";

export const HistoryTable: FC = () => {
    const translate = useLanguage();

    const columns = [
        {
            title: `${translate("membersName")}`,
            dataIndex: "membersName",
            key: "membersName",
        },
        {
            title: `${translate("visitTime")}`,
            dataIndex: "visitTime",
            key: "visitTime",
        },
        { title: `${translate("visitDate")}`, dataIndex: "visitData" },
    ];
    return (
        <div className='history-table'>
            <Table columns={columns} dataSource={visitData} />
        </div>
    );
};
