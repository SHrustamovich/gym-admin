import { Button, Space, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { ProductTableI } from "../../pages/types";
import { Loading } from "../Loading/Loading";

export const ProductTable: FC<ProductTableI> = ({
    response,
    loading,
    pageTo,
}) => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        console.log(item);
    };

    const handlyDelete = (item: any) => {
        console.log(item);
    };

    const columns = [
        {
            title: `${translate("praductT")}`,
            dataIndex: "poduct_type",
            key: "productT",
        },
        {
            title: `${translate("productN")}`,
            dataIndex: "product_name",
            key: "productN",
        },
        { title: `${translate("unitP")}`, dataIndex: "price" },
        { title: `${translate("sup")}`, dataIndex: "supplier" },
        { title: `${translate("stockin")}`, dataIndex: "quantity" },
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
            {loading ? (
                <Loading />
            ) : (
                <Table
                    columns={columns}
                    dataSource={response?.data.result.map((item) => ({
                        poduct_type: item.poduct_type,
                        product_name: item.product_name,
                        price: item.price,
                        supplier: item.supplier,
                        quantity: item.quantity,
                        record: item,
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
