import { PlusIcon } from "../assets/icons/icons";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { ProductTable } from "../components/ProductTable/ProducTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import useLanguage from "../hooks/useLanguage";

export const Products = () => {
    const translate = useLanguage();

    return (
        <div className='products'>
            <div className='products__header'>
                <div className='products__search'>
                    <SearchInput />
                </div>
                <div className='products__filter'>
                    <FilterPart />
                    <div className='btn'>
                        <PlusIcon />
                        <span className='title'>{translate("add")}</span>
                    </div>
                </div>
            </div>
            <div className='products__body'>
                <ProductTable />
            </div>
        </div>
    );
};
