import { FC } from "react";
import { DumbbleTopIcon, FoundNumberIcon } from "../../assets/icons/icons";
export const NotFoundPage: FC = () => {
    return (
        <div className='not-found'>
            <div className='not-found__top'>
                <DumbbleTopIcon />
            </div>
            <div className='not-found__number'>
                <FoundNumberIcon />
            </div>
        </div>
    );
};
