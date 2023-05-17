import { FC } from "react";
import { Table } from "antd";
import useLanguage from "../../hooks/useLanguage";
import { HistoryTableI } from "../../pages/types";
import { Loading } from "../Loading/Loading";
import moment from "moment";

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
            title: `${translate("name")}`,
            dataIndex: "fullname",
            key: "fullname",
        },
        {
            title: `${translate("visitDate")}`,
            dataIndex: "date",
            render: (record: string) => moment(record).format("LL"),
        },
    ];
    return (
        <div className='history-table'>
            {loading ? (
                <Loading />
            ) : (
                <Table
                    columns={columns}
                    dataSource={response?.data.result.map((item) => ({
                        checked_in_by: item.checked_in_by,
                        fullname: item.member.fullname,
                        date: item.date,
                    }))}
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
