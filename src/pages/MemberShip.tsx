import { FC, useState } from "react";
import { PlusIcon } from "../assets/icons/icons";
import { MemberShipDriver } from "../components/MemberShipDriver/MemberShipDriver";
import { MemberShipTable } from "../components/MemberShipTable/MemberShipTable";
import useLanguage from "../hooks/useLanguage";

export const MemberShip: FC = () => {
    const translate = useLanguage();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='member-ship'>
            <div className='member-ship__title'>CODY GARBRANDT</div>
            <div className='member-ship__header'>
                <div className='member-ship__text'>
                    <p>MEMBERSHIPS</p> <span>active</span>
                </div>
                <button className='member-ship__btn' onClick={showDrawer}>
                    <PlusIcon />
                    <span className='title'>{translate("addmem")}</span>
                </button>
            </div>
            <MemberShipDriver open={open} onClose={onClose} />
            <MemberShipTable />
        </div>
    );
};
