import { FC } from "react";
import { WrongIcon } from "../../assets/icons/icons";
import useLanguage from "../../hooks/useLanguage";

export const Wrong: FC = () => {

    const translate = useLanguage()
    
    return (
        <div className="wrong">
            <WrongIcon />
            <div className="wrong__title">
               {translate("wrong")}
            </div>
        </div>
    )
}