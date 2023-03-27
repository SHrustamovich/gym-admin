import { FC } from "react";
import { SearchIcon } from "../../assets/icons/icons";

export const SearchInput: FC = () => {
    return (
        <div className="search">
            <SearchIcon/>
            <input type="text" />
        </div>
    )
}