import { useState } from "react";
import { KarzinkaIcon } from "../assets/icons/icons";
import { SalesDrawer } from "../components/SalesDrawer/SalesDrawer";
import { SearchInput } from "../components/SearchInput/SearchInput";
import useLanguage from "../hooks/useLanguage";
import { cardData } from "../utils/data";

export const Sales = () => {
    const [open, setOpen] = useState(false);

    const translate = useLanguage();

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='sales'>
            <div className='sales__search'>
                <SearchInput />
            </div>
            <div className='sales__body'>
                {cardData.map((item) => (
                    <div className='sales__card card' key={item.id}>
                        <div className='card__top'></div>
                        <p className='card__title'>{item.title}</p>
                        <p className='card__brand'>Brand:{item.brand}</p>
                        <p className='card__quality'>Quality:{item.quality}</p>
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
