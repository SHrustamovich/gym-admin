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
        xAxes: [
            {
                position: "right",
                scalePositionLeft: true,
            },
        ],
        responsive: true,
        plugins: {
            // legend: {
            //     position: ,
            // },
            title: {
                display: true,
            },
            // yAxes: [
            //     {
            //         gridLines: {
            //             display: true,
            //             color: "#03A5C5",
            //             lineWidth: 88,
            //         },
            //         ticks: {
            //             fontColor: "white",
            //             beginAtZero: true,
            //         },
            //     },
            // ],
        },
        // line: {
        //     tension: 0,
        // },
    };

    const labels = dataGraph?.statistics.map((item) => item.created_at);

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
                // pointStyle: "star",
            },
        ],
    };

    return (
        <div className='graph'>
            
            <Line data={data} options={options} />
        </div>
    );
};
