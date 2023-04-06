import { Button, Space, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { typeData } from "../../utils/data";

export const SettingTable: FC = () => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        console.log(item);
    };

    const handlyDelete = (item: any) => {
        console.log(item);
    };

    const columns = [
        {
            title: `${translate("membershipTypeName")}`,
            dataIndex: "typeName",
            key: "memberType",
        },
        {
            title: `${translate("free")}`,
            dataIndex: "free",
            key: "free",
        },
        { title: `${translate("disc")}`, dataIndex: "dis" },
        {
            title: `${translate("action")}`,
            dataIndex: "",
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
        <div className='setting-table'>
            <Table columns={columns} pagination={false} dataSource={typeData} />
        </div>
    );
};
