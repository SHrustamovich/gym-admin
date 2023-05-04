import { FC } from "react";
import { Line } from "react-chartjs-2";
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

    const labels = dataGraph?.statistics.map((item) =>
        moment(item.created_at).format("LL")
    );

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: "money",
                data: dataGraph?.statistics.map((item) => item.total),

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
