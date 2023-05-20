import { Button, message, Space, Table } from "antd";
import { FC, useState } from "react";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { useDeleteRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { InventoryTableI } from "../../pages/types";
import { inventoryDeleteUrl } from "../../utils/urls";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { Loading } from "../Loading/Loading";

export const InventoryTable: FC<InventoryTableI> = ({
    response,
    pageTo,
    loading,
    setEditInventory,
    showDwawer,
    request,
}) => {
    const translate = useLanguage();
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [inventoryId, setInventoryId] = useState<number | null>(null);

    const handlyProductTypeEdit = (item: any) => {
        setEditInventory(item);
        showDwawer();
    };

    const handlyDelete = (id: number) => {
        setInventoryId(id);
        setIsModalDeleteOpen(true);
    };

    const inventoryDeleteReq = useDeleteRequest();

    const onOkDelete = async () => {
        const { success } = await inventoryDeleteReq.request({
            url: inventoryDeleteUrl(inventoryId as number),
        });
        if (!success) {
            setIsModalDeleteOpen(false);
            request();
            message.success("DELETE PRODUCT TYPE");
        } else {
            setIsModalDeleteOpen(false);
            message.error("SOMETHING WENT WRONG");
        }
    };

    const columns = [
        {
            title: `${translate("praductT")}`,
            dataIndex: "product_type",
        },
        {
            title: `${translate("productN")}`,
            dataIndex: "product_name",
        },
        { title: `${translate("sup")}`, dataIndex: "supplier" },
        { title: `${translate("quantity")}`, dataIndex: "quantity" },
        {
            title: `${translate("status")}`,
            dataIndex: "status",
            key: "status",
            render: (status: string) => (
                <>
                    {status == "active" ? (
                        <p className='status'>{translate("active")}</p>
                    ) : status == "inactive" ? (
                        <p className='status no'>{translate("inActive")}</p>
                    ) : (
                        <p className='status no'>{translate("removed")}</p>
                    )}
                </>
            ),
        },
        {
            title: `${translate("action")}`,
            render: (record: any) => (
                <Space size={10}>
                    <Button
                        onClick={() => handlyProductTypeEdit(record)}
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
        <div className='inven-table'>
            {loading ? (
                <Loading />
            ) : (
                <Table
                    columns={columns}
                    dataSource={response?.data.result}
                    pagination={{
                        total: response?.data.total,
                        current: response?.data.page,
                        onChange: (to) => pageTo(to),
                    }}
                />
            )}
            <DeleteModal
                title={translate("deletePerson")}
                visible={isModalDeleteOpen}
                onOkDelete={onOkDelete}
                onCancel={() => setIsModalDeleteOpen(false)}
                loading={inventoryDeleteReq.loading}
            />
        </div>
    );
};
