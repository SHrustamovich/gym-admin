import { FC, useState } from "react";
import { PlusIcon } from "../assets/icons/icons";
import { SettingDrawer } from "../components/SettingDrawer/SettingDrawer";
import { SettingTable } from "../components/SettingTable/SettingTable";
import useLanguage from "../hooks/useLanguage";

export const Setting: FC = () => {
    const [open, setOpen] = useState(false);

    const translate = useLanguage();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='setting'>
            <div className='setting__header'>
                <p className='setting__title'>{translate("memberType")}</p>
                <button onClick={showDrawer} className='setting__btn'>
                    <PlusIcon />
                    <span className='setting__text'>{translate("add")}</span>
                </button>
            </div>
            <SettingDrawer open={open} onClose={onClose} />
            <div className='setting__body'>
                <SettingTable />
            </div>
        </div>
    );
};
