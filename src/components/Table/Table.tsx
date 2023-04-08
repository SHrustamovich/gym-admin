import { Button, Space, Table } from "antd";
import { FC, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { allData } from "../../utils/data";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { tableI } from "../../pages/types";
import { DeleteIcon, EditIcon, ExitIcon } from "../../assets/icons/icons";
import { useLoad } from "../../hooks/request";
import { memberGet } from "../../utils/urls";
import { membersReqI } from "../type";
import { Loading } from "../Loading/Loading";

export const TableMain: FC<tableI> = ({ showModal }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [currentPage, setCurrentPage] = useState();
    const translate = useLanguage();

    const memberRequest = useLoad<membersReqI>({ url: memberGet });

    const { response, loading } = memberRequest;
    const handlyProductEdit = (item: any) => {
        showModal();
    };

    const handlyDelete = (item: any) => {
        setIsOpenModal(true);
    };

    const onOkDelete = () => {
        alert("delete");
    };

    const columns = [
        {
            title: `${translate("name")}`,
            dataIndex: "fullname",
            key: "name_uz",
        },
        {
            title: `${translate("phone")}`,
            dataIndex: "phone",
        },
        {
            title: `${translate("status")}`,
            dataIndex: "status",
            key: "status",
            render: (status: any) => (
                <>
                    {status == "active" ? (
                        <p className='status'>ACTIVE</p>
                    ) : (
                        <p className='status no'>REMOVED</p>
                    )}
                </>
            ),
        },
        { title: `${translate("type")}`, dataIndex: "type" },
        { title: `${translate("end")}`, dataIndex: "expireTime" },
        {
            title: `${translate("action")}`,
            dataIndex: "",
            render: (record: any) => (
                <Space size={10}>
                    <div className='btn__gate'>
                        <Button className='table__btn'>
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
                        fullname: item.fullname,
                        phone: item.phone,
                        status: item.status,
                        type: item.membership.membership_type.name,
                        expireTime: item.membership.term,
                    }))}
                    pagination={{
                        total: response?.data.total,
                        current: response?.data.page,
                    }}
                />
            )}
            <DeleteModal
                title={translate("deletePerson")}
                visible={isOpenModal}
                onOkDelete={onOkDelete}
                onCancel={() => setIsOpenModal(false)}
            />
        </div>
    );
};
