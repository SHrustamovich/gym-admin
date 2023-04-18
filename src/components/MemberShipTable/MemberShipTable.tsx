import { FC, useState } from "react";
import { Button, message, Space, Table } from "antd";
import useLanguage from "../../hooks/useLanguage";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { useDeleteRequest } from "../../hooks/request";
import { memberShipDelete } from "../../utils/urls";
import { MemberShipTableI } from "../../pages/types";
import { DeleteIcon, EditIcon } from "../../assets/icons/icons";

export const MemberShipTable: FC<MemberShipTableI> = ({
    response,
    req,
    editMemberShip,
    showDrawer,
}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [elementLoading, setElementLoading] = useState(false);
    const [memberShip, setMemberShip] = useState<number | null>(null);
    const translate = useLanguage();

    const handlyProductEdit = (item: any) => {
        editMemberShip(item);
        showDrawer();
    };

    const deleteMemberShip = useDeleteRequest();

    const handlyMemberShipDelete = (id: number) => {
        setMemberShip(id);
        setIsOpenModal(true);
    };

    const onOkDelete = async () => {
        setElementLoading(true);
        const { success, error } = await deleteMemberShip.request({
            url: memberShipDelete(memberShip as number),
        });
        if (!success) {
            setElementLoading(false);
            setIsOpenModal(false);
            req();
            message.success("DELETE MEMBERSHIP");
        }
        if (success) {
            setElementLoading(false);
            setIsOpenModal(false);
            message.error("SOMETHING WENT WRONG");
        }
    };
    const columns = [
        {
            title: `${translate("memberType")}`,
            dataIndex: "name",
            key: "memberType",
        },
        {
            title: `${translate("price")}`,
            dataIndex: "price",
        },
        { title: `${translate("date")}`, dataIndex: "date" },
        { title: `${translate("end")}`, dataIndex: "end" },
        { title: `${translate("status")}`, dataIndex: "status" },
        {
            title: `${translate("action")}`,
            dataIndex: "record",
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
                        onClick={() => handlyMemberShipDelete(record.id)}
                        className='table__btn'
                    >
                        <DeleteIcon />
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className='ship-table'>
            <Table
                columns={columns}
                pagination={false}
                dataSource={response?.data.memberships.map((item) => ({
                    name: item.membership_type.name,
                    price: item.membership_type.price,
                    date: item.start_date || "___",
                    end: item.end_date || "___",
                    status: item.status,
                    record: item,
                }))}
            />
            <DeleteModal
                title={translate("deletePerson")}
                visible={isOpenModal}
                onOkDelete={onOkDelete}
                onCancel={() => setIsOpenModal(false)}
            />
        </div>
    );
};
