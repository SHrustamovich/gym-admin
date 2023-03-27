import { FC } from "react";
import { PlusIcon } from "../assets/icons/icons";
import useLanguage from "../hooks/useLanguage";

export const MemberShip: FC = () => {
    const translate = useLanguage();
    return (
        <div className='member-ship'>
            <div className='member-ship__title'>CODY GARBRANDT</div>
            <div className='member-ship__header'>
                <div className='member-ship__text'>
                    <p>MEMBERSHIPS</p> <span>active</span>
                </div>
                <button className='member-ship__btn'>
                    <PlusIcon />
                    <span className='members__title'>
                        {translate("addmem")}
                    </span>
                </button>
            </div>
        </div>
    );
};
