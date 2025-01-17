import { useLocation, useSearchParams } from "react-router-dom";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { PaymentTable } from "../components/PaymentTable/PaymentTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { sortData } from "../utils/data";
import { PaymentI } from "../components/type";
import { paymentGet } from "../utils/urls";
import { useMemo } from "react";

export const Payments = () => {
    const translate = useLanguage();
    const [searchParams, setSearchParams] = useSearchParams();
    const { search } = useLocation();

    const paymentGetReq = useLoad<PaymentI, string>(
        {
            url: paymentGet + `${search}`,
        },
        [search]
    );

    const { response, request, loading } = paymentGetReq;

    const totalMoney = useMemo(() => {
        return response?.data.result
            ?.map((item) => +item.total)
            ?.reduce((acc, cur) => acc + cur, 0);
    }, [response?.data.result]);

    const pageTo = (to: string) => {
        searchParams.set("page", to);
        setSearchParams(searchParams);
    };

    return (
        <div className='payments'>
            <div className='payment__header'>
                <div className='payment__search'>
                    <SearchInput />
                </div>
                <div className='payment__filter'>
                    <FilterPart filterData={sortData} />
                </div>
            </div>
            <div className='payment__title'>
                {translate("allPayment")}:{" "}
                <span className='payment__span'>{totalMoney?.toLocaleString()}</span>
            </div>
            <div className='payment__body'>
                <PaymentTable
                    response={response}
                    pageTo={pageTo}
                    loading={loading}
                />
            </div>
        </div>
    );
};
