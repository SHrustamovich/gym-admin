import { Tabs, TabsProps } from "antd";
import { FC } from "react";
import { MemberShipType } from "../components/MemberShipType/MemberShipType";

export const Setting: FC = () => {
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: `MEMBERSHIP TYPES`,
            children: <MemberShipType />,
        },
        {
            key: "2",
            label: `PRODUCT TYPES`,
            children: `Content of Tab Pane 2`,
        },
    ];
    return <Tabs defaultActiveKey='1' items={items} />;
};
