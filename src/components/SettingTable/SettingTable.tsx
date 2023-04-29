import { Button, Space, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { typeData } from "../../utils/data";
import { SettingTableI } from "../../pages/types";
import { Loading } from "../Loading/Loading";

export const SettingTable: FC<SettingTableI> = ({ response, load }) => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        console.log(item);
    };

    const handlyDelete = (item: number) => {
        console.log(item);
    };

    const columns = [
        {
            title: `${translate("membershipTypeName")}`,
            dataIndex: "name",
            key: "name",
        },
        {
            title: `${translate("term")}`,
            dataIndex: "term",
            key: "term",
        },
        { title: `${translate("price")}`, dataIndex: "price" },
        {
            title: `${translate("action")}`,
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
            {load ? (
                <Loading />
            ) : (
                <Table
                    columns={columns}
                    pagination={false}
                    dataSource={response?.data.result}
                />
            )}
        </div>
    );
};
