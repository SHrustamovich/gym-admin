import { FilterPart } from "../components/FilterPart/FilterPart";
import { PaymentTable } from "../components/PaymentTable/PaymentTable";
import { SearchInput } from "../components/SearchInput/SearchInput";
import useLanguage from "../hooks/useLanguage";

export const Payments = () => {
    const translate = useLanguage();

    return (
        <div className='payments'>
            <div className='payment__header'>
                <div className='payment__search'>
                    <SearchInput />
                </div>
                <div className='payment__filter'>
                    <FilterPart />
                </div>
            </div>
            <div className='payment__title'>
                {translate("allPayment")}:{" "}
                <span className='payment__span'>{1234}</span>
            </div>
            <div className='payment__body'>
                <PaymentTable />
            </div>
        </div>
    );
};
