import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { Inventory } from "../pages/Inventory";
import { Members } from "../pages/Members";
import { Payments } from "../pages/Payments";
import { Products } from "../pages/Products";
import { Sales } from "../pages/Sales";
import {
    AddIcon,
    KarzinkaIcon,
    IntererIcon,
    ProductIcon,
    HistoryIcon,
    PaymentIcon,
    HomeIcon,
} from "../assets/icons/icons";
import { ILangData, ISidebarData } from "./type";
import { StaticFilterDataI } from "../pages/types";

export const sideBarData: ISidebarData[] = [
    {
        id: 1,
        title: "home",
        path: "/",
        icon: <HomeIcon />,
        companents: <Home />,
    },
    {
        id: 2,
        title: "members",
        path: "/members",
        icon: <AddIcon />,
        companents: <Members />,
    },
    {
        id: 3,
        title: "sales",
        path: "/sales",
        icon: <KarzinkaIcon />,
        companents: <Sales />,
    },
    {
        id: 4,
        title: "inventory",
        path: "/inventory",
        icon: <IntererIcon />,
        companents: <Inventory />,
    },
    {
        id: 5,
        title: "products",
        path: "/products",
        icon: <ProductIcon />,
        companents: <Products />,
    },
    {
        id: 6,
        title: "history",
        path: "/history",
        icon: <HistoryIcon />,
        companents: <History />,
    },
    {
        id: 7,
        title: "payments",
        path: "/payments",
        icon: <PaymentIcon />,
        companents: <Payments />,
    },
];

export const LangData: ILangData[] = [
    {
        id: 1,
        key: "eng",
        title: "Eng",
        icon: "/icon/image.png",
    },
    {
        id: 2,
        key: "ru",
        title: "Ru",
        icon: "/icon/imageRu.png",
    },
    {
        id: 3,
        key: "uz",
        title: "Uz",
        icon: "/icon/imageUz.png",
    },
];

export interface SortDataI {
    id: number;
    label: string;
}

export const sortData: SortDataI[] = [
    {
        id: 1,
        label: "active",
    },
    {
        id: 2,
        label: "inactive",
    },
    {
        id: 3,
        label: "removed",
    },
];

export const StaticFilterData: StaticFilterDataI[] = [
    {
        id: 1,
        title: "week",
        path: "week",
    },
    {
        id: 2,
        title: "month",
        path: "month",
    },
    {
        id: 3,
        title: "year",
        path: "year",
    },
];

interface termDataI {
    id: number;
    term: string;
}

export const termData: termDataI[] = [
    {
        id: 1,
        term: "oneday",
    },
    {
        id: 2,
        term: "fiftenday",
    },
    {
        id: 3,
        term: "week",
    },
    {
        id: 4,
        term: "onemonth",
    },
    {
        id: 5,
        term: "twomonth",
    },
    {
        id: 6,
        term: "threemonth",
    },
    {
        id: 7,
        term: "fourday",
    },
    {
        id: 8,
        term: "fiveday",
    },
    {
        id: 9,
        term: "sixday",
    },
];
