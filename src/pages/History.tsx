import { FilterPart } from "../components/FilterPart/FilterPart";
import { HistoryTable } from "../components/HistoryTable/HistoryTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { sortData } from "../utils/data";

export const History = () => {
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
                    <HistoryTable />
                </div>
            </div>
        </div>
    );
};
