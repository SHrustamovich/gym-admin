import { FC, useState } from "react";
import { PlusIcon } from "../../assets/icons/icons";
import { useLoad } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { productType } from "../../utils/urls";
import { ProductTypeModal } from "../ProductTypeModal/ProductTypeModal";
import { ProductTypeTable } from "../ProductTypeTable/ProductTypeTable";
import { ProductTypeI } from "../type";

export const ProductType: FC = () => {
    const translate = useLanguage();
    const [openModal, setOpenModal] = useState(false);
    const [productTypeEdit, setProductTypeEdit] = useState<null>(null);

    const showModal = () => {
        setOpenModal(true);
    };

    const onCancel = () => {
        setOpenModal(false);
        setProductTypeEdit(null);
    };

    const productTypeList = useLoad<ProductTypeI>({ url: productType });

    const { response, request, loading } = productTypeList;

    console.log(response, "productType");

    return (
        <div className='product-type'>
            <div className='setting__header'>
                <p className='setting__title'>{translate("praductT")}</p>
                <button onClick={showModal} className='setting__btn'>
                    <PlusIcon />
                    <span className='setting__text'>{translate("add")}</span>
                </button>
            </div>
            <ProductTypeModal
                openModal={openModal}
                onCancel={onCancel}
                req={request}
                productTypeEdit={productTypeEdit}
            />
            <div className='setting__body'>
                <ProductTypeTable
                    response={response}
                    loading={loading}
                    req={request}
                    setProductTypeEdit={setProductTypeEdit}
                    showModal={showModal}
                />
            </div>
        </div>
    );
};
