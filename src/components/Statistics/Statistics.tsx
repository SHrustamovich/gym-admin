import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import {
    ActiveIcon,
    ExpriredIcon,
    StockIcon,
    VisitIcon,
} from "../../assets/icons/icons";
import { StatisticPageI } from "../type";

export const Statistics: FC<StatisticPageI> = ({ response }) => {
    const translate = useLanguage();

    return (
        <div className='statistics'>
            <div className='statistics-card'>
                <ActiveIcon />
                <div className='statistics-info'>
                    <p className='statistics-name'>
                        {translate("activeMember")}
                    </p>
                    <p className='statistics-number'>
                        {response?.activeMembers}
                    </p>
                </div>
            </div>
            <div className='statistics-card'>
                <ExpriredIcon />
                <div className='statistics-info'>
                    <p className='statistics-name'>
                        {translate("expriredMember")}
                    </p>
                    <p className='statistics-number'>
                        {response?.inactiveMembers}
                    </p>
                </div>
            </div>
            <div className='statistics-card'>
                <VisitIcon />
                <div className='statistics-info'>
                    <p className='statistics-name'>{translate("todayVisit")}</p>
                    <p className='statistics-number'>
                        {response?.todaysVisits}
                    </p>
                </div>
            </div>
            <div className='statistics-card'>
                <StockIcon />
                <div className='statistics-info'>
                    <p className='statistics-name'>{translate("outStocks")}</p>
                    <p className='statistics-number'>
                        {response?.outOufStockProducts}
                    </p>
                </div>
            </div>
        </div>
    );
};
