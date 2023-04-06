import useLanguage from "../hooks/useLanguage";

export const Home = () => {
    const translate = useLanguage();
    return (
        <div className='home'>
            <div className='home__title'>{translate("money")}</div>
            <div className="home__chart">
                
            </div>
        </div>
    );
};
