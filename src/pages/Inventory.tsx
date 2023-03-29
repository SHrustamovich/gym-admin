import { useState } from "react";
import { PlusIcon } from "../assets/icons/icons";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { InventoryDrawer } from "../components/InventoryDrawer/InventoryDraver";
import { InventoryTable } from "../components/InventoryTable/INventoryTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import useLanguage from "../hooks/useLanguage";

export const Inventory = () => {
    const [open, setOpen] = useState(false);

    const showDwawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const translate = useLanguage();

    return (
        <div className='inventory'>
            <div className='inventory__header'>
                <SearchInput />
                <div className='inventory__filter'>
                    <FilterPart />
                    <button className='inventory__btn' onClick={showDwawer}>
                        <PlusIcon />
                        <span className='inventory__btn__text'>
                            {translate("stock")}
                        </span>
                    </button>
                </div>
            </div>
            <InventoryDrawer open={open} onClose={onClose} />
            <div className='inventory__body'>
                <InventoryTable />
            </div>
        </div>
    );
};
