import { useState } from "react";
import { PlusIcon } from "../assets/icons/icons";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { ProductDrawer } from "../components/ProductDrawer/ProductDrawer";
import { ProductTable } from "../components/ProductTable/ProducTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import useLanguage from "../hooks/useLanguage";
import { sortData } from "../utils/data";

export const Products = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const translate = useLanguage();

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
            <ProductDrawer open={open} onClose={onClose} />
            <div className='products__body'>
                <ProductTable />
            </div>
        </div>
    );
};
