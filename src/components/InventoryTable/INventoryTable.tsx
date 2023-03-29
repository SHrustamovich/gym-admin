import { Button, Space, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const InventoryTable: FC = () => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        console.log(item);
    };

    const handlyDelete = (item: any) => {
        console.log(item);
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
        <div className='inven-table'>
            <Table columns={columns} pagination={false} />
        </div>
    );
};
