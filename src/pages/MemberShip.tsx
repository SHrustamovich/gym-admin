import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { MemberShipDriver } from "../components/MemberShipDriver/MemberShipDriver";
import { MemberShipTable } from "../components/MemberShipTable/MemberShipTable";
import useLanguage from "../hooks/useLanguage";
import { useLoad } from "../hooks/request";
import { memberGetU } from "../utils/urls";
import { MembershipIdType, MemberShipTypeEditI } from "../components/type";
import { PlusIcon } from "../assets/icons/icons";

export const MemberShip: FC = () => {
    const translate = useLanguage();
    const [open, setOpen] = useState(false);
    const [editMemberShip, setEditMemberShip] =
        useState<MemberShipTypeEditI | null>(null);

    const { id } = useParams();

    const memberSHipGetId = useLoad<MembershipIdType>({
        url: memberGetU + `/${id}` + "/memberships",
    });

    const { response, loading, request } = memberSHipGetId;

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setEditMemberShip(null);
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
                            <p>{translate("addmem")}</p>
                        </div>
                        <button
                            className='member-ship__btn'
                            onClick={showDrawer}
                        >
                            <PlusIcon />
                            <span className='title'>
                                {translate("membership")}
                            </span>
                        </button>
                    </div>
                    <MemberShipDriver
                        open={open}
                        onClose={onClose}
                        data={response}
                        req={request}
                        memberShipEdit={editMemberShip}
                    />
                    <MemberShipTable
                        response={response}
                        req={request}
                        editMemberShip={setEditMemberShip}
                        showDrawer={showDrawer}
                    />
                </div>
            )}
        </>
    );
};
