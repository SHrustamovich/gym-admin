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

export const productData = [
    {
        id: 1,
        productType: "Drinks",
        name: "Aquafina Bottled Water (0.5L)",
        sup: "Aquafina",
        stocks: 6,
        status: 0,
        price: "20,5",
    },
    {
        id: 2,
        productType: "Drinks",
        name: "Aquafina Bottled Water (0.5L)",
        sup: "Aquafina",
        stocks: 6,
        status: 1,
        price: "20,5",
    },
    {
        id: 3,
        productType: "Drinks",
        name: "Aquafina Bottled Water (0.5L)",
        sup: "Aquafina",
        stocks: 8,
        status: 0,
        price: "20,5",
    },
    {
        id: 4,
        productType: "Drinks",
        name: "Aquafina Bottled Water (0.5L)",
        sup: "Aquafina",
        stocks: 3,
        status: 1,
        price: "20,5",
    },
    {
        id: 5,
        productType: "Drinks",
        name: "Aquafina Bottled Water (0.5L)",
        sup: "Aquafina",
        stocks: 6,
        status: 0,
        price: "20,5",
    },
];

export const visitData = [
    {
        id: 1,
        membersName: "Michael Oliveira",
        visitTime: "3 months ago (At 11:23)",
        visitData: "December 22, 2022",
    },
    {
        id: 2,
        membersName: "Michael Oliveira",
        visitTime: "3 months ago (At 11:23)",
        visitData: "December 22, 2022",
    },
    {
        id: 3,
        membersName: "Michael Oliveira",
        visitTime: "3 months ago (At 11:23)",
        visitData: "December 22, 2022",
    },
    {
        id: 4,
        membersName: "Michael Oliveira",
        visitTime: "3 months ago (At 11:23)",
        visitData: "December 22, 2022",
    },
];

export const typeData = [
    {
        id: 1,
        typeName: "Standart",
        free: "100",
        dis: "10$",
    },
    {
        id: 2,
        typeName: "Standart",
        free: "100",
        dis: "10$",
    },
    {
        id: 3,
        typeName: "Standart",
        free: "100",
        dis: "10$",
    },
];

export const StaticFilterData: StaticFilterDataI[] = [
    {
        id: 1,
        title: "Week",
        path: "week",
    },
    {
        id: 2,
        title: "Month",
        path: "month",
    },
    {
        id: 3,
        title: "Year",
        path: "year",
    },
];
