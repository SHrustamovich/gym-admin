import { FC, useEffect, useRef, useState } from "react";
import { FilterIcon } from "../../assets/icons/icons";
import { filterI } from "../../pages/types";

export const FilterPart: FC<filterI> = ({ filterData }) => {
    const [open, setOpen] = useState<boolean>(false);
    const sort = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        window.addEventListener("click", () => {
            console.log("-------------------------")
            if (sort.current !== null) {
                setOpen(false);
                sort.current.style.maxHeight = "0px";
            }
        });
        return () => {
            window.removeEventListener("click", () => {
                if (sort.current !== null) {
                    setOpen(false);
                    sort.current.style.maxHeight = "0px";
                }
            });
        };
    }, []);

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

    return (
        <div className='filter'>
            <div className='filter__header' onClick={openFilterBody}>
                <FilterIcon />
                <div className='filter__title'>Filter</div>
            </div>
            <ul className={`filter__list ${open ? "vis" : ""}`} ref={sort}>
                {filterData.map((item) => (
                    <li className='filter__item' key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
