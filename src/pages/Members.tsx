import { useState } from "react";
import { PlusIcon } from "../assets/icons/icons";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { MemberModal } from "../components/Modals/MemberModal";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { SuccessAdd } from "../components/SuccessAdd/SuccessAdd";
import { Wrong } from "../components/SuccessAdd/Wrong";
import { TableMain } from "../components/Table/Table";
import useLanguage from "../hooks/useLanguage";

export const Members = () => {
    const translate = useLanguage();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='members'>
            <div className='members__header'>
                <div className='members__search'>
                    <SearchInput />
                </div>
                <div className='members__right'>
                    <div className='members__filter'>
                        <FilterPart />
                    </div>
                    <div className='members__add'>
                        <button className='btn' onClick={showModal}>
                            <PlusIcon />
                            <div className='title'>
                                {translate("add")}
                            </div>
                        </button>
                        <MemberModal
                            isModalOpen={isModalOpen}
                            handleCancel={handleCancel}
                        />
                    </div>
                </div>
            </div>
            <div className='members__table'>
                <TableMain />
            </div>
            <div className='members__success'>
                <Wrong />
            </div>
        </div>
    );
};
