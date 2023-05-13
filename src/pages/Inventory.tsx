import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { InventoryDrawer } from "../components/InventoryDrawer/InventoryDraver";
import { InventoryTable } from "../components/InventoryTable/INventoryTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { InventoryI } from "../components/type";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { sortData } from "../utils/data";
import { inventoryGet } from "../utils/urls";
import { PlusIcon } from "../assets/icons/icons";

export const Inventory = () => {
    const [open, setOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [editInventory, setEditInventory] = useState<null>(null);

    const showDwawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const { search } = useLocation();

    const inventoryGetReq = useLoad<InventoryI, string>(
        {
            url: inventoryGet + `${search}`,
        },
        [search]
    );

    const { response, request, loading } = inventoryGetReq;

    const pageTo = (to: string) => {
        searchParams.set("page", to);
        setSearchParams(searchParams);
    };

    const translate = useLanguage();

    return (
        <div className='inventory'>
            <div className='inventory__header'>
                <SearchInput />
                <div className='inventory__filter'>
                    <FilterPart filterData={sortData} />
                    <button className='inventory__btn' onClick={showDwawer}>
                        <PlusIcon />
                        <span className='inventory__btn__text'>
                            {translate("stock")}
                        </span>
                    </button>
                </div>
            </div>
            <InventoryDrawer
                open={open}
                onClose={onClose}
                req={request}
                editInventory={editInventory}
            />
            <div className='inventory__body'>
                <InventoryTable
                    response={response}
                    pageTo={pageTo}
                    loading={loading}
                    setEditInventory={setEditInventory}
                    showDwawer={showDwawer}
                    request={request}
                />
            </div>
        </div>
    );
};
