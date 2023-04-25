import { Button, message, Space, Table } from "antd";
import { FC, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";
import { ProductTableI } from "../../pages/types";
import { Loading } from "../Loading/Loading";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { useDeleteRequest } from "../../hooks/request";
import { productDelete } from "../../utils/urls";

export const ProductTable: FC<ProductTableI> = ({
    response,
    loading,
    pageTo,
    setEditProduct,
    showDrawer,
    req,
}) => {
    const translate = useLanguage();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [product, setProduct] = useState<number | null>(null);

    const handlyProductEdit = (item: any) => {
        setEditProduct(item);
        showDrawer();
    };

    const deleteProduct = useDeleteRequest();

    const handlyDelete = (item: number) => {
        setProduct(item);
        setIsOpenModal(true);
    };

    const onOkDelete = async () => {
        const { success, error } = await deleteProduct.request({
            url: productDelete(product as number),
        });
        if (!success) {
            // setElementLoading(false);
            setIsOpenModal(false);
            req();
            message.success("DELETE MEMBERSHIP");
        }
        if (success) {
            // setElementLoading(false);
            setIsOpenModal(false);
            message.error("SOMETHING WENT WRONG");
        }
    };
    const columns = [
        {
            title: `${translate("praductT")}`,
            dataIndex: "product_type",
            key: "productT",
        },
        {
            title: `${translate("productN")}`,
            dataIndex: "product_name",
            key: "productN",
        },
        { title: `${translate("unitP")}`, dataIndex: "price" },
        { title: `${translate("sup")}`, dataIndex: "supplier" },

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
                        product_type: item.product_type,
                        product_name: item.product_name,
                        price: item.price,
                        supplier: item.supplier,
                        record: item,
                    }))}
                    pagination={{
                        total: response?.data.total,
                        current: response?.data.page,
                        onChange: (to) => pageTo(to),
                    }}
                />
            )}
            <DeleteModal
                title={translate("deletePerson")}
                visible={isOpenModal}
                onOkDelete={onOkDelete}
                onCancel={() => setIsOpenModal(false)}
            />
        </div>
    );
};
