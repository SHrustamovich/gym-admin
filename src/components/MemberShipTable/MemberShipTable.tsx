import { Button, Space, Table } from "antd";
import { FC, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { MemberShipTableI } from "../../pages/types";

const memberShipInitial = {};

export const MemberShipTable: FC<MemberShipTableI> = ({ response }) => {
    const [memberShip, setMemberShip] = useState(null);
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        console.log(item, "wwwwwwwwwww");
    };

    const handlyMemberShipDelete = (id: number) => {
        // setMemberShip(id);
        console.log(id, "rrrrrrrrrr");
    };
    console.log(memberShip, "eeeeeeeeeeee");
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
            dataIndex: "record",
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
                        onClick={() => handlyMemberShipDelete(record.id)}
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
                    record: item.membership_type,
                }))}
            />
        </div>
    );
};
