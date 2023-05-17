import { Tabs, TabsProps } from "antd";
import { FC } from "react";
import { MemberShipType } from "../components/MemberShipType/MemberShipType";
import { ProductType } from "../components/ProductType/ProductType";
import useLanguage from "../hooks/useLanguage";

export const Setting: FC = () => {
    const translate = useLanguage();

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: `${translate("memberType")}`,
            children: <MemberShipType />,
        },
        {
            key: "2",
            label: `${translate("praductT")}`,
            children: <ProductType />,
        },
    ];
    return <Tabs defaultActiveKey='1' items={items} />;
};
