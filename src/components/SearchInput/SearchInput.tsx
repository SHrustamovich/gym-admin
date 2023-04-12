// import Search from "antd/es/transfer/search";
import { FC } from "react";
import { Input } from "antd";
import { SearchIcon } from "../../assets/icons/icons";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;

export const SearchInput: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchParamsSet = (value: string) => {
        if (value === "") {
            searchParams.delete("q");
        } else {
            searchParams.set("q", value);
        }
        setSearchParams(searchParams);
    };

    const onSearch = (value: string) => {
        searchParamsSet(value);
    };

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const value = target.value;
        if (value === "") {
            searchParamsSet(value);
        }
    };

    return (
        <div className='search'>
            <Search
                onSearch={onSearch}
                onChange={(e) => onChange(e)}
                prefix={<SearchIcon />}
            />
        </div>
    );
};
