import { Button, message, Space, Table } from "antd";
import { FC, useState } from "react";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { useDeleteRequest } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { ProductTypeTableI } from "../../pages/types";
import { productTypeDelete } from "../../utils/urls";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { Loading } from "../Loading/Loading";

export const ProductTypeTable: FC<ProductTypeTableI> = ({
    response,
    loading,
    req,
    setProductTypeEdit,
    showModal,
}) => {
    const translate = useLanguage();
    const [productType, setProductType] = useState<number | null>(null);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const productTypeDeleteReq = useDeleteRequest();

    const handlyProductTypeEdit = (item: any) => {
        setProductTypeEdit(item);
        showModal();
    };

    const handlyDelete = (id: number) => {
        setProductType(id);
        setIsModalDeleteOpen(true);
    };

    const onOkDelete = async () => {
        const { success } = await productTypeDeleteReq.request({
            url: productTypeDelete(productType as number),
        });
        if (!success) {
            setIsModalDeleteOpen(false);
            req();
            message.success("DELETE PRODUCT TYPE");
        }
        if (success) {
            setIsModalDeleteOpen(false);
            message.error("SOMETHING WENT WRONG");
        }
    };

    const columns = [
        {
            title: `${translate("praductT")}`,
            dataIndex: "name",
            key: "name",
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
        <div className='producttype-table'>
            {loading ? (
                <Loading />
            ) : (
                <Table columns={columns} dataSource={response?.data.result} />
            )}
            <DeleteModal
                title={translate("deletePerson")}
                visible={isModalDeleteOpen}
                onOkDelete={onOkDelete}
                onCancel={() => setIsModalDeleteOpen(false)}
                loading={productTypeDeleteReq.loading}
            />
        </div>
    );
};
