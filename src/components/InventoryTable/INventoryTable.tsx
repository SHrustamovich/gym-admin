import { Button, Space, Table } from "antd";
import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { productData } from "../../utils/data";

export const InventoryTable: FC = () => {
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        alert(item);
    };

    const handlyDelete = (item: any) => {
        alert(item);
    };

    const columns = [
        {
            title: `${translate("productT")}`,
            dataIndex: "productType",
        },
        {
            title: `${translate("productN")}`,
            dataIndex: "name",
        },
        { title: `${translate("sup")}`, dataIndex: "sup" },
        { title: `${translate("stock")}`, dataIndex: "stocks" },
        {
            title: `${translate("status")}`,
            dataIndex: "status",
            key: "status",
            render: (status: any) => (
                <>
                    {status > 0 ? (
                        <p className='status'>AVAILABLE</p>
                    ) : (
                        <p className='status no'>OUT OF STOCK</p>
                    )}
                </>
            ),
        },
    ];
    return (
        <div className='inven-table'>
            <Table columns={columns} dataSource={productData} />
        </div>
    );
};
