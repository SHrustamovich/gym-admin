import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { Loading } from "../Loading/Loading";
import { useDeleteRequest, useLoad } from "../../hooks/request";
import { CheckIn } from "../CheckInModal/CheckIn";
import { Button, message, Space, Table } from "antd";
import { historyGet, membersDelete } from "../../utils/urls";
import { tableI } from "../../pages/types";
import { HistoryI, membersEditI } from "../type";
import { DeleteIcon, EditIcon, ExitIcon } from "../../assets/icons/icons";
import moment from "moment";
const membersInitials = {
    id: null,
    fullname: "",
    date_of_birth: "",
    gender: "",
    phone: "",
    type: "",
};
export const TableMain: FC<tableI> = ({
    showModal,
    response,
    loading,
    request,
    setEditMembers,
    pageTo,
}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [checkInModal, setCheckInModal] = useState(false);
    const [checkInIndex, setCheckInIndex] = useState<number | null>(null);
    const [members, setMembers] = useState<membersEditI>(membersInitials);
    const [elementLoading, setElementLoading] = useState(false);

    let navigate = useNavigate();

    const translate = useLanguage();

    const handlyCheckIn = (item: number) => {
        setCheckInIndex(item);
        setCheckInModal(true);
    };

    const onCancelModal = () => {
        setCheckInModal(false);
    };

    const deleteMembers = useDeleteRequest();

    const handlyProductEdit = (item: any) => {
        setEditMembers(item);
        showModal();
    };
    const handlyDelete = (id: number) => {
        setMembers({ ...members, id });
        setIsOpenModal(true);
    };

    const onOkDelete = async () => {
        setElementLoading(true);
        const { success, error } = await deleteMembers.request({
            url: membersDelete(members.id as number),
        });
        if (!success) {
            setElementLoading(false);
            setIsOpenModal(false);
            request();
            message.success("MEMBER ADDED SUCCESSFULLY");
        }
        if (success) {
            setElementLoading(false);
            setIsOpenModal(false);
            message.error("SOMETHING WENT WRONG");
        }
    };

    const changePathFunc = (id: number) => {
        navigate(`/membership/${id}`);
    };

    const VisitList = useLoad<HistoryI>({ url: historyGet });

    const { response: visitListItem } = VisitList;

    const columns = [
        {
            title: `${translate("name")}`,
            dataIndex: "fullname",
            key: "fullname",
            render: (record: any) => (
                <button
                    className='navigateClass'
                    onClick={() => changePathFunc(record.id)}
                >
                    {record.fullname}
                </button>
            ),
        },
        {
            title: `${translate("phone")}`,
            dataIndex: "phone",
        },
        {
            title: `${translate("status")}`,
            dataIndex: "status",
            key: "status",
            render: (status: string) => (
                <>
                    {status == "active" ? (
                        <p className='status'>{translate("active")}</p>
                    ) : status == "inactive" ? (
                        <p className='status no'>{translate("inActive")}</p>
                    ) : (
                        <p className='status no'>{translate("removed")}</p>
                    )}
                </>
            ),
        },
        {
            title: `${translate("type")}`,
            dataIndex: "type",
        },
        {
            title: `${translate("end")}`,
            dataIndex: "expireTime",
            render: (record: string) => moment(record).format("LL"),
        },
        {
            title: `${translate("action")}`,
            dataIndex: "record",
            render: (record: any) => (
                <Space size={10}>
                    <div className='btn__gate'>
                        <Button
                            disabled={visitListItem?.data.result.some(
                                (item) => item.member.id == record.id
                            )}
                            className='table__btn'
                            onClick={() => handlyCheckIn(record.id)}
                        >
                            <ExitIcon />
                        </Button>
                        <Button
                            onClick={() => handlyProductEdit(record)}
                            className='table__btn'
                        >
                            <EditIcon />
                        </Button>
                        <Button
                            danger
                            onClick={() => handlyDelete(record.id)}
                            className='table__btn'
                        >
                            <DeleteIcon />
                        </Button>
                    </div>
                </Space>
            ),
        },
    ];

    return (
        <div className='table-main'>
            {loading ? (
                <Loading />
            ) : (
                <Table
                    columns={columns}
                    rowKey='phone'
                    dataSource={response?.data.result.map((item) => ({
                        fullname: item,
                        phone: item.phone,
                        status: item.status,
                        type: item.membership_type || "___",
                        expireTime: item.end_date || "___",
                        record: item,
                    }))}
                    pagination={{
                        total: response?.data.total,
                        current: response?.data.page,
                        onChange: (to) => pageTo(to),
                    }}
                />
            )}
            <CheckIn
                checkInModal={checkInModal}
                onCancelModal={onCancelModal}
                checkInIndex={checkInIndex}
            />
            <DeleteModal
                title={translate("deletePerson")}
                visible={isOpenModal}
                onOkDelete={onOkDelete}
                onCancel={() => setIsOpenModal(false)}
                loading={deleteMembers.loading}
            />
        </div>
    );
};
