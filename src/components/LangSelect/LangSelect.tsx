import { FC, useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../../context/languageContext";
import useModalView from "../../hooks/useModalView";
import { LangData } from "../../utils/data";
import { getImage, LangEnums } from "../../utils/helpers";

export const SelectLang: FC = () => {
    const { language, setLang } = useContext(LanguageContext);
    const { open, closeModal, openModal } = useModalView();
    const list = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (list.current && !list.current.contains(event.target as Node)) {
                closeModal();
                list.current.style.maxHeight = "0px";
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handlyOpen = (e: any) => {
        e.stopPropagation();
        if (list.current !== null) {
            if (open) {
                closeModal();
                list.current.style.maxHeight = "0px";
            } else {
                openModal();
                list.current.style.maxHeight = list.current.scrollHeight + "px";
            }
        }
    };

    const handlyLang = (e: LangEnums) => {
        setLang?.(e);
        closeModal();
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
                        <div className='select__item_img'>
                            <img src={item.icon} alt='' />
                        </div>
                        <span className='select__item_text'>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
