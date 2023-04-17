import { Button, Space, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { MemberShipTableI } from "../../pages/types";

export const MemberShipTable: FC<MemberShipTableI> = ({ response }) => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        alert(item);
    };
    const handlyDelete = (item: any) => {
        alert(item);
    };

    // console.log(response);

    const columns = [
        {
            title: `${translate("memberType")}`,
            dataIndex: "memberType",
            key: "memberType",
        },
        {
            title: `${translate("term")}`,
            dataIndex: "term",
        },
        { title: `${translate("date")}`, dataIndex: "date" },
        { title: `${translate("end")}`, dataIndex: "end" },
        { title: `${translate("status")}`, dataIndex: "status" },
        {
            title: `${translate("action")}`,
            dataIndex: "action",
            render: (record: any) => (
                <Space size={10}>
                    <Button
                        onClick={() => handlyProductEdit(record)}
                        className='table__btn'
                    >
                        <EditIcon />
                    </Button>
                    <Button
                        danger
                        onClick={() => handlyDelete(record.id)}
                        className='table__btn'
                    >
                        <DeleteIcon />
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className='ship-table'>
            <Table
                columns={columns}
                pagination={false}
                dataSource={response?.data.memberships.map((item) => ({
                    memberType: item.membership_type.name,
                    term: item.term,
                    date: item.start_date || "___",
                    end: item.end_date || "___",
                    status: item.status,
                }))}
            />
        </div>
    );
};
