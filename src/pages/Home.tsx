import { useLocation } from "react-router-dom";
import { HomeGraph } from "../components/Home/HomeGraph";
import { Statistics } from "../components/Statistics/Statistics";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { StatisticI } from "../components/type";
import { statisticsGet } from "../utils/urls";

export const Home = () => {
    const translate = useLanguage();

    const { search } = useLocation();

    const statisticsList = useLoad<StatisticI, string>(
        {
            url: statisticsGet + search,
        },
        [search]
    );

    const { response, request, loading } = statisticsList;

    return (
        <div className='home'>
            <div className='home__title'>{translate("money")}</div>
            <div className='home__chart'>
                <HomeGraph dataGraph={response} />
            </div>
            <div className='statistics-main'>
                <Statistics response={response} />
            </div>
        </div>
    );
};
