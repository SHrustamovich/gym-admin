import { Button } from "antd";
import { FC, useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { StaticFilterData } from "../../utils/data";
import { StatisticTotalI } from "../type";

export const TopGraph: FC<StatisticTotalI> = ({ total }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activePath, setActivePath] = useState("year");

    const totalMoney = useMemo(() => {
        return total
            ?.map((item) => +item.total)
            .reduce((acc, cur) => acc + cur);
    }, [total]);

    const funcChangeData = (item: string) => {
        searchParams.set("sortByData", item);
        setSearchParams(searchParams);
    };

    const queryPath = searchParams.get("sortByData");
    const newActivePath = useMemo(
        () => (queryPath == null ? "year" : queryPath),
        [queryPath]
    );

    return (
        <div className='top-graph'>
            <div className='top-graph__info'>
                <p className='top-graph__year'>Продажи 2022</p>
                <div className='top-graph__money'>
                    <p className='top-gaph__total'>{totalMoney} mln sum</p>
                    <p className='top-graph__persant'>
                        <span>1,3% ПО </span>
                        СРАВНЕНИЮ С ПРОШЛЫМ ГОДОМ
                    </p>
                </div>
            </div>
            <div className='top-graph__btns'>
                {StaticFilterData.map((item) => (
                    <button
                        className={`top-graph__btn ${
                            newActivePath == item.path ? "active" : ""
                        }`}
                        onClick={() => funcChangeData(item.path)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};
