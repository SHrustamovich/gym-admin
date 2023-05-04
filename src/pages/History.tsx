import { useLocation, useSearchParams } from "react-router-dom";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { HistoryTable } from "../components/HistoryTable/HistoryTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { HistoryI } from "../components/type";
import { useLoad } from "../hooks/request";
import { sortData } from "../utils/data";
import { historyGet } from "../utils/urls";

export const History = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { search } = useLocation();

    const VisitList = useLoad<HistoryI, string>(
        { url: historyGet + `${search}` },
        [search]
    );
    const { response, loading } = VisitList;

    const pageTo = (to: string) => {
        searchParams.set("page", to);
        setSearchParams(searchParams);
    };

    return (
        <div className='history'>
            <div className='history__header'>
                <div className='history__search'>
                    <SearchInput />
                </div>
                <div className='history__filter'>
                    <FilterPart filterData={sortData} />
                </div>
            </div>
            <div className='history__body'>
                <div className='history__title'>
                    Total Number of Visitors Today: 0
                </div>
                <div className='history__table'>
                    <HistoryTable
                        response={response}
                        loading={loading}
                        pageTo={pageTo}
                    />
                </div>
            </div>
        </div>
    );
};
