import { FC, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PlusIcon } from "../assets/icons/icons";
import { Loading } from "../components/Loading/Loading";
import { MemberShipDriver } from "../components/MemberShipDriver/MemberShipDriver";
import { MemberShipTable } from "../components/MemberShipTable/MemberShipTable";
import {
    MembershipIdType,
    memberShipInterfacee,
    MemberType,
} from "../components/type";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { memberGetU, memberShipGet } from "../utils/urls";

export const MemberShip: FC = () => {
    const translate = useLanguage();
    const [open, setOpen] = useState(false);

    const { id } = useParams();

    const memberSHipGetId = useLoad<MembershipIdType>({
        url: memberGetU + `/${id}` + "/memberships",
    });

    const { response, loading, request } = memberSHipGetId;

    console.log(response);

    const memberShipsGet = useLoad({ url: memberShipGet });

    const { response: memberShipResponse } = memberShipsGet;

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className='member-ship'>
                    <div className='member-ship__title'>
                        {response?.data.fullname}
                    </div>
                    <div className='member-ship__header'>
                        <div className='member-ship__text'>
                            <p>MEMBERSHIPS</p>{" "}
                            <span>{response?.data.status}</span>
                        </div>
                        <button
                            className='member-ship__btn'
                            onClick={showDrawer}
                        >
                            <PlusIcon />
                            <span className='title'>{translate("addmem")}</span>
                        </button>
                    </div>
                    <MemberShipDriver open={open} onClose={onClose} />
                    <MemberShipTable response={response} />
                </div>
            )}
        </>
    );
};
