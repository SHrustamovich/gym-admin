import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SalesDrawer } from "../components/SalesDrawer/SalesDrawer";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { productGet } from "../utils/urls";
import { ProductI, ProductResultI } from "../components/type";
import { useCardContext } from "../context/karzinkaContext";
import { KarzinkaIcon } from "../assets/icons/icons";
import { Button } from "antd";

export const Sales = () => {
    const [open, setOpen] = useState(false);

    const { getData, cardData } = useCardContext();

    const translate = useLanguage();

    const { search } = useLocation();

    const productListData = useLoad<ProductI, string>(
        {
            url: productGet + search,
        },
        [search]
    );
    const { response, request, loading } = productListData;

    const handlyProduct = (data: ProductResultI) => {
        if (data) {
            getData(data);
        }
    };
    const onClose = () => {
        setOpen(false);
    };

    const handlyBtnDraver = () => {
        setOpen(true);
    };

    return (
        <div className='sales'>
            <div className='sales__search'>
                <SearchInput />
                <div className='sales__karzinka' onClick={handlyBtnDraver}>
                    <p className='sales__count'>{cardData.length}</p>
                    <button className='sales__btn'>
                        <KarzinkaIcon />
                    </button>
                </div>
            </div>
            <div className='sales__body'>
                {response?.data.result.map((item) => (
                    <div className='sales__card card' key={item.id}>
                        <div className='card__top'></div>
                        <p className='card__title'>{item.product_name}</p>
                        <p className='card__brand'>Brand:{item.supplier}</p>
                        <p className='card__quality'>Quality:{item.quantity}</p>
                        <Button
                            disabled={item.quantity == 0}
                            className='card__btn'
                            onClick={() => handlyProduct(item)}
                        >
                            <KarzinkaIcon />
                            <span className='card__text'>
                                {translate("card")}
                            </span>
                        </Button>
                    </div>
                ))}
            </div>
            <SalesDrawer open={open} onClose={onClose} load={loading} />
        </div>
    );
};
