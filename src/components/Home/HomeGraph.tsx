import { FC, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useSearchParams } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { HomeGraphI } from "../../pages/types";
import { TopGraph } from "./TopGraph";
import { StatisticTypeI } from "../type";
import moment from "moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const HomeGraph: FC<HomeGraphI> = ({ dataGraph }) => {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            title: {
                display: true,
            },
        },
    };

    const [search] = useSearchParams();

    type ObjT = {
        week: (item: StatisticTypeI) => string;
        month: (item: StatisticTypeI) => string;
        year: (item: StatisticTypeI) => string;
    };

    const obj: ObjT = {
        week: (item) => moment(item.week).format("ddd"),
        month: (item) => moment(item.month).format("LL"),
        year: (item) => moment(item.year).format("MMM"),
    };

    const labels = useMemo(() => {
        return dataGraph?.statistics?.map((item) => {
            return search.get("sortDateBy")
                ? obj[search.get("sortDateBy") as keyof ObjT](item)
                : null;
        });
    }, [dataGraph]);

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: "Money",
                data: dataGraph?.statistics?.map((item) => item.total),

                borderColor: "#ffffff",
                backgroundColor: "#2D2D42",
                lineTension: 0.3,
                parsing: { xAxisKey: "period", yAxisKey: "price_so" },
            },
        ],
    };

    return (
        <div className='graph'>
            <TopGraph total={dataGraph?.statistics} />
            <Line data={data} options={options} className='line' />
        </div>
    );
};
