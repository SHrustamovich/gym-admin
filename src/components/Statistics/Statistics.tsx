import { FC } from "react";
import {
    ActiveIcon,
    ExpriredIcon,
    StockIcon,
    VisitIcon,
} from "../../assets/icons/icons";
import { StatisticPageI } from "../type";

export const Statistics: FC<StatisticPageI> = ({ response }) => {
    return (
        <div className='statistics'>
            <div className='statistics-card'>
                <ActiveIcon />
                <div className='statistics-info'>
                    <p className='statistics-name'>ACTIVE MEMBERS</p>
                    <p className='statistics-number'>
                        {response?.activeMembers}
                    </p>
                </div>
            </div>
            <div className='statistics-card'>
                <ExpriredIcon />
                <div className='statistics-info'>
                    <p className='statistics-name'>Exprired Members</p>
                    <p className='statistics-number'>
                        {response?.inactiveMembers}
                    </p>
                </div>
            </div>
            <div className='statistics-card'>
                <VisitIcon />
                <div className='statistics-info'>
                    <p className='statistics-name'>Today Visits</p>
                    <p className='statistics-number'>
                        {response?.todaysVisits}
                    </p>
                </div>
            </div>
            <div className='statistics-card'>
                <StockIcon />
                <div className='statistics-info'>
                    <p className='statistics-name'>Out of Stock Products</p>
                    <p className='statistics-number'>
                        {response?.outOufStockProducts}
                    </p>
                </div>
            </div>
        </div>
    );
};
