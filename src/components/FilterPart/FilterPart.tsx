import { FC, useRef, useState } from "react";
import { FilterIcon } from "../../assets/icons/icons";
import { sortData } from "../../utils/data";

export const FilterPart: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const sort = useRef<HTMLUListElement | null>(null);

    const openFilterBody = () => {
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
                {sortData.map((item) => (
                    <li className='filter__item' key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
