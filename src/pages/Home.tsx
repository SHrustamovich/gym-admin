import { HomeGraph } from "../components/Home/HomeGraph";
import { StatisticI } from "../components/type";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { statisticsGet } from "../utils/urls";

export const Home = () => {
    const translate = useLanguage();

    const statisticsList = useLoad<StatisticI>({ url: statisticsGet });

    const { response, request, loading } = statisticsList;

    console.log(response);

    return (
        <div className='home'>
            <div className='home__title'>{translate("money")}</div>
            <div className='home__chart'>
                <HomeGraph dataGraph={response} />
            </div>
        </div>
    );
};
