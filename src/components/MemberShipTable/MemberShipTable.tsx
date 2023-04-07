import { Button, Space, Table } from "antd";
import { FC } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useLanguage from "../../hooks/useLanguage";

export const MemberShipTable: FC = () => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        alert(item);
    };

    const handlyDelete = (item: any) => {
        alert(item);
    };

    const columns = [
        {
            title: `${translate("memberType")}`,
            dataIndex: "memberType",
            key: "memberType",
        },
        {
            title: `${translate("term")}`,
            dataIndex: "term",
            key: "term",
            render: (image: string) => <img width={70} src={image} />,
        },
        { title: `${translate("date")}`, dataIndex: "date" },
        { title: `${translate("end")}`, dataIndex: "end" },
        { title: `${translate("status")}`, dataIndex: "price" },
        {
            title: `${translate("action")}`,
            dataIndex: "",
            render: (record: any) => (
                <Space size={10}>
                    <Button onClick={() => handlyProductEdit(record)}>
                        <EditOutlined />
                    </Button>
                    <Button danger onClick={() => handlyDelete(record.id)}>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className='ship-table'>
            <Table columns={columns} pagination={false} />
        </div>
    );
};
