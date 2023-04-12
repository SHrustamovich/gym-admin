import { FC, useContext, useRef, useState } from "react";
import { LanguageContext } from "../../context/languageContext";
import { LangData } from "../../utils/data";
import { getImage, LangEnums } from "../../utils/helpers";
export const SelectLang: FC = () => {
    const { language, setLang } = useContext(LanguageContext);
    const [open, setOpen] = useState<boolean>(false);
    const list = useRef<HTMLUListElement | null>(null);

    window.addEventListener("click", () => {
        if (list.current !== null) {
            setOpen(false);
            list.current.style.maxHeight = "0px";
        }
    });

    const handlyOpen = (e: any) => {
        e.stopPropagation();
        if (list.current !== null) {
            if (open) {
                setOpen(false);
                list.current.style.maxHeight = "0px";
            } else {
                setOpen(true);
                list.current.style.maxHeight = list.current.scrollHeight + "px";
            }
        }
    };

    const handlyLang = (e: LangEnums) => {
        setLang?.(e);
        setOpen(false);
    };

    return (
        <div className='select'>
            <div className='select__header' onClick={handlyOpen}>
                <img src={getImage(LangData, language)} alt='' />
            </div>
            <ul className={`select__list ${open ? "open" : ""}`} ref={list}>
                {LangData.map((item) => (
                    <li
                        className='select__item'
                        key={item.id}
                        onClick={() => handlyLang(item.key as LangEnums)}
                    >
                        <div className='select__item__img'>
                            <img src={item.icon} alt='' />
                        </div>
                        <span className='select__item__text'>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
