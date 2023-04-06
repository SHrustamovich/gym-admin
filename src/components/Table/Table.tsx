import { Button, Space, Table } from "antd";
import { FC, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { allData } from "../../utils/data";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { tableI } from "../../pages/types";
import { DeleteIcon, EditIcon, ExitIcon } from "../../assets/icons/icons";

export const TableMain: FC<tableI> = ({ showModal }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        showModal();
    };

    const handlyDelete = (item: any) => {
        setIsOpenModal(true);
    };

    const onOkDelete = () => {
        console.log("delete");
    };

    const columns = [
        { title: `${translate("name")}`, dataIndex: "name", key: "name_uz" },
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
                    {status > 0 ? (
                        <p className='status'>AVAILABLE</p>
                    ) : (
                        <p className='status no'>OUT OF STOCK</p>
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
            <Table columns={columns} dataSource={allData} />
            <DeleteModal
                title={translate("deletePerson")}
                visible={isOpenModal}
                onOkDelete={onOkDelete}
                onCancel={() => setIsOpenModal(false)}
            />
        </div>
    );
};
