import { FC } from "react";
import { DumbbleIcon, FoundNumberIcon } from "../../assets/icons/icons";
export const NotFoundPage: FC = () => {
    return (
        <div className='not-found'>
            <div className='not-found__main'>
                <div className='not-found__stone'>
                    <DumbbleIcon />
                </div>
                <div className='not-found__number'>
                    <FoundNumberIcon />
                </div>
                <div className='not-found__text'>
                    <p>PAGE NOT FOUND</p>
                </div>
            </div>
        </div>
    );
};
