import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { PlusIcon } from "../../assets/icons/icons";
import { useLoad } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { membershipTypeUrl } from "../../utils/urls";
import { SettingDrawer } from "../SettingDrawer/SettingDrawer";
import { SettingTable } from "../SettingTable/SettingTable";
import { MemberShipTypeI } from "../type";

export const MemberShipType: FC = () => {
    const [open, setOpen] = useState(false);
    const [editMemberType, setEditMemberType] = useState(null);

    const translate = useLanguage();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setEditMemberType(null);
    };

    const { search } = useLocation();

    const MemberShipTypeList = useLoad<MemberShipTypeI, string>(
        {
            url: membershipTypeUrl + search,
        },
        [search]
    );

    const { response, request, loading } = MemberShipTypeList;

    return (
        <div className='setting'>
            <div className='setting__header'>
                <p className='setting__title'>{translate("memberType")}</p>
                <button onClick={showDrawer} className='setting__btn'>
                    <PlusIcon />
                    <span className='setting__text'>{translate("add")}</span>
                </button>
            </div>
            <SettingDrawer
                open={open}
                onClose={onClose}
                req={request}
                editMemberType={editMemberType}
            />
            <div className='setting__body'>
                <SettingTable
                    response={response}
                    load={loading}
                    setEditMemberType={setEditMemberType}
                    showDrawer={showDrawer}
                    req={request}
                />
            </div>
        </div>
    );
};
