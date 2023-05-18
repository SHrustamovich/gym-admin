import { Button, message, Space, Table } from "antd";
import { FC, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { SettingTableI } from "../../pages/types";
import { Loading } from "../Loading/Loading";
import { useDeleteRequest } from "../../hooks/request";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { membershipTypeDelete } from "../../utils/urls";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";

export const SettingTable: FC<SettingTableI> = ({
    response,
    load,
    setEditMemberType,
    showDrawer,
    req,
}) => {
    const translate = useLanguage();
    const [memberShipType, setMemberShipType] = useState<number | null>(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const MemberShipTypeDelete = useDeleteRequest();

    const handlyProductEdit = (item: any) => {
        setEditMemberType(item);
        showDrawer();
    };

    const handlyDelete = (item: number) => {
        setMemberShipType(item);
        setIsOpenModal(true);
    };

    const onOkDelete = async () => {
        const { success } = await MemberShipTypeDelete.request({
            url: membershipTypeDelete(memberShipType as number),
        });
        if (!success) {
            setIsOpenModal(false);
            req();
            message.success("DELETE MEMBERSHIP TYPE");
        }
        if (success) {
            setIsOpenModal(false);
            message.error("SOMETHING WENT WRONG");
        }
    };
    const columns = [
        {
            title: `${translate("membershipTypeName")}`,
            dataIndex: "name",
            key: "name",
        },
        {
            title: `${translate("term")}`,
            dataIndex: "term",
            key: "term",
        },
        {
            title: `${translate("price")}`,
            dataIndex: "price",
            render: (item: string) => <>{Number(item).toLocaleString()}</>,
        },

        {
            title: `${translate("action")}`,
            render: (record: any) => (
                <Space size={10}>
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
                </Space>
            ),
        },
    ];
    return (
        <div className='setting-table'>
            {load ? (
                <Loading />
            ) : (
                <Table
                    columns={columns}
                    pagination={false}
                    dataSource={response?.data.result}
                />
            )}
            <DeleteModal
                title={translate("deletePerson")}
                visible={isOpenModal}
                onOkDelete={onOkDelete}
                onCancel={() => setIsOpenModal(false)}
                loading={MemberShipTypeDelete.loading}
            />
        </div>
    );
};
