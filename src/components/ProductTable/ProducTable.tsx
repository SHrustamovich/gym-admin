import { Button, Space, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { productData } from "../../utils/data";

export const ProductTable: FC = () => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        console.log(item);
    };

    const handlyDelete = (item: any) => {
        console.log(item);
    };

    const columns = [
        {
            title: `${translate("productT")}`,
            dataIndex: "productType",
            key: "productT",
        },
        {
            title: `${translate("productN")}`,
            dataIndex: "name",
            key: "productN",
        },
        { title: `${translate("unitP")}`, dataIndex: "price" },
        { title: `${translate("sup")}`, dataIndex: "sup" },
        { title: `${translate("stock")}`, dataIndex: "stocks" },
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
        <div className='product-table'>
            <Table columns={columns} dataSource={productData} />
        </div>
    );
};
