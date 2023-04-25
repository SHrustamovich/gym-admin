import { useState } from "react";
import { KarzinkaIcon } from "../assets/icons/icons";
import { SalesDrawer } from "../components/SalesDrawer/SalesDrawer";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { cardData, productData } from "../utils/data";
import { productGet } from "../utils/urls";
import { ProductI } from "../components/type";

export const Sales = () => {
    const [open, setOpen] = useState(false);

    const translate = useLanguage();

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // const ProductListReq = useLoad({ url: productGet });

    const productListData = useLoad<ProductI>({ url: productGet });
    const { response, request, loading } = productListData;

    return (
        <div className='sales'>
            <div className='sales__search'>
                <SearchInput />
            </div>
            <div className='sales__body'>
                {response?.data.result.map((item) => (
                    <div className='sales__card card' key={item.id}>
                        <div className='card__top'></div>
                        <p className='card__title'>{item.product_name}</p>
                        <p className='card__brand'>Brand:{item.supplier}</p>
                        <p className='card__quality'>Quality:{item.quantity}</p>
                        <button className='card__btn' onClick={showDrawer}>
                            <KarzinkaIcon />
                            <span className='card__text'>
                                {translate("card")}
                            </span>
                        </button>
                    </div>
                ))}
            </div>
            <SalesDrawer open={open} onClose={onClose} />
        </div>
    );
};
