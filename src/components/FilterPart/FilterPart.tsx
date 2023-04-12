import { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterIcon } from "../../assets/icons/icons";
import { filterI } from "../../pages/types";

export const FilterPart: FC<filterI> = ({ filterData }) => {
    const [open, setOpen] = useState<boolean>(false);
    const sort = useRef<HTMLUListElement | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const openFilterBody = (e: any) => {
        e.stopPropagation();
        if (sort.current !== null) {
            if (open) {
                setOpen(false);
                sort.current.style.maxHeight = "0px";
            } else {
                setOpen(true);
                sort.current.style.maxHeight = sort.current.scrollHeight + "px";
            }
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (sort.current && !sort.current.contains(event.target as Node)) {
                setOpen(false);
                sort.current.style.maxHeight = "0px";
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const SelectFilter = (target: string) => {
        searchParams.set("status", target);
        setSearchParams(searchParams);
    };

    return (
        <div className='filter'>
            <div className='filter__header' onClick={openFilterBody}>
                <FilterIcon />
                <div className='filter__title'>Filter</div>
            </div>
            <ul className={`filter__list ${open ? "vis" : ""}`} ref={sort}>
                {filterData.map((item) => (
                    <li
                        className='filter__item'
                        key={item.id}
                        onClick={() => SelectFilter(item.label)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
