import { Button, Space, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const TableMain: FC = () => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        console.log(item);
    };

    const handlyDelete = (item: any) => {
        console.log(item);
    };

    const columns = [
        { title: `${translate("name")}`, dataIndex: "name_uz", key: "name_uz" },
        {
            title: `${translate("phone_number")}`,
            dataIndex: "image",
            key: "image",
            render: (image: string) => <img width={70} src={image} />,
        },
        { title: `${translate("status")}`, dataIndex: "price" },
        { title: `${translate("type")}`, dataIndex: "price" },
        { title: `${translate("expire_time")}`, dataIndex: "price" },
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
        <div className='table-main'>
            <Table columns={columns} pagination={false} />
        </div>
    );
};
