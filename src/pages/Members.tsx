import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { FilterPart } from "../components/FilterPart/FilterPart";
import { MemberModal } from "../components/Modals/MemberModal";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { TableMain } from "../components/Table/Table";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { membersEditI, membersReqI } from "../components/type";
import { memberGet } from "../utils/urls";
import { PlusIcon } from "../assets/icons/icons";
import { sortData } from "../utils/data";

export const Members = () => {
    const translate = useLanguage();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editMembers, setEditMembers] = useState<membersEditI | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const { search } = useLocation();
    const page = search.replace("?", "");

    const memberRequest = useLoad<membersReqI, string>(
        {
            url: memberGet + `&${page}`,
        },
        [search]
    );

    const { response, loading, request } = memberRequest;

    const pageTo = (to: string) => {
        searchParams.set("page", to);
        setSearchParams(searchParams);
    };

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
                        <FilterPart filterData={sortData} />
                    </div>
                    <div className='members__add'>
                        <button className='btn' onClick={showModal}>
                            <PlusIcon />
                            <div className='title'>{translate("add")}</div>
                        </button>
                        <MemberModal
                            isModalOpen={isModalOpen}
                            handleCancel={handleCancel}
                            request={request}
                            editMembers={editMembers}
                        />
                    </div>
                </div>
            </div>
            <div className='members__table'>
                <TableMain
                    showModal={showModal}
                    response={response}
                    loading={loading}
                    request={request}
                    setEditMembers={setEditMembers}
                    pageTo={pageTo}
                />
            </div>
        </div>
    );
};
