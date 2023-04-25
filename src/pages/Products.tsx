import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { PlusIcon } from "../assets/icons/icons";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { ProductDrawer } from "../components/ProductDrawer/ProductDrawer";
import { ProductTable } from "../components/ProductTable/ProducTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { ProductI } from "../components/type";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { sortData } from "../utils/data";
import { productGet } from "../utils/urls";

export const Products = () => {
    const [open, setOpen] = useState(false);
    const [editProduct, setEditProduct] = useState<null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const translate = useLanguage();

    const { search } = useLocation();

    const productGetList = useLoad<ProductI, string>(
        { url: productGet + `${search}` },
        [search]
    );

    const { response, request, loading } = productGetList;

    const pageTo = (to: string) => {
        searchParams.set("page", to);
        setSearchParams(searchParams);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='products'>
            <div className='products__header'>
                <div className='products__search'>
                    <SearchInput />
                </div>
                <div className='products__filter'>
                    <FilterPart filterData={sortData} />
                    <button className='btn' onClick={showDrawer}>
                        <PlusIcon />
                        <div className='title'>{translate("add")}</div>
                    </button>
                </div>
            </div>
            <ProductDrawer
                open={open}
                onClose={onClose}
                editProduct={editProduct}
                req={request}
            />
            <div className='products__body'>
                <ProductTable
                    response={response}
                    loading={loading}
                    pageTo={pageTo}
                    setEditProduct={setEditProduct}
                    showDrawer={showDrawer}
                    req={request}
                />
            </div>
        </div>
    );
};
