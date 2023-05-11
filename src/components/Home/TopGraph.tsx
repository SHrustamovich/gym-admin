import { FC, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { StaticFilterData } from "../../utils/data";
import { StatisticTotalI } from "../type";

export const TopGraph: FC<StatisticTotalI> = ({ total }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const totalMoney = useMemo(() => {
        return total
            ?.map((item) => +item.total)
            ?.reduce((acc, cur) => acc + cur, 0);
    }, [total]);

    const funcChangeData = (item: string) => {
        searchParams.set("sortDateBy", item);
        setSearchParams(searchParams);
    };

    const queryPath = searchParams.get("sortDateBy");
    const newActivePath = useMemo(
        () => (queryPath == null ? "year" : queryPath),
        [queryPath]
    );

    useEffect(() => {
        funcChangeData("month");
    }, []);

    return (
        <div className='top-graph'>
            <div className='top-graph__info'>
                <p className='top-graph__year'>Продажи 2022</p>
                <div className='top-graph__money'>
                    <p className='top-gaph__total'>
                        Total sum : {totalMoney?.toLocaleString()}
                         sum
                    </p>
                </div>
            </div>
            <div className='top-graph__btns'>
                {StaticFilterData.map((item) => (
                    <button
                        className={`top-graph__btn ${
                            newActivePath == item.path ? "active" : ""
                        }`}
                        key={item.id}
                        onClick={() => funcChangeData(item.path)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};
