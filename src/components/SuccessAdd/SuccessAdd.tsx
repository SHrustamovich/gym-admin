import { FC } from "react";
import { SuccessIcon } from "../../assets/icons/icons";
import useLanguage from "../../hooks/useLanguage";

export const SuccessAdd: FC = () => {
    const translate = useLanguage();
    return (
        <div className='success'>
            <SuccessIcon />
            <div className='success__title'>{translate("success")}</div>
        </div>
    );
};
