import {
    HomeIcon,
    AddIcon,
    KarzinkaIcon,
    IntererIcon,
    ProductIcon,
    HistoryIcon,
    PaymentIcon,
} from "../assets/icons/icons";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { Inventory } from "../pages/Inventory";
import { Members } from "../pages/Members";
import { MemberShip } from "../pages/MemberShip";
import { Payments } from "../pages/Payments";
import { Products } from "../pages/Products";
import { Sales } from "../pages/Sales";

export const sideBarData = [
    {
        id: 1,
        title: "home",
        path: "/",
        icon: HomeIcon,
        companents: Home,
    },
    {
        id: 2,
        title: "members",
        path: "/members",
        icon: AddIcon,
        companents: MemberShip,
    },
    {
        id: 3,
        title: "sales",
        path: "/sales",
        icon: KarzinkaIcon,
        companents: Sales,
    },
    {
        id: 4,
        title: "inventory",
        path: "/inventory",
        icon: IntererIcon,
        companents: Inventory,
    },
    {
        id: 5,
        title: "products",
        path: "/products",
        icon: ProductIcon,
        companents: Products,
    },
    {
        id: 6,
        title: "history",
        path: "/history",
        icon: HistoryIcon,
        companents: History,
    },
    {
        id: 7,
        title: "payments",
        path: "/payments",
        icon: PaymentIcon,
        companents: Payments,
    },
];
export const LangData = [
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

export const sortData = [
    {
        id: 1,
        title: "Sort by ABC",
    },
    {
        id: 2,
        title: "Sort by ABC",
    },
    {
        id: 3,
        title: "Sort by ABC",
    },
    {
        id: 4,
        title: "Sort by ABC",
    },
];

export const cardData = [
    {
        id: 1,
        title: "Fitness Gloves",
        brand: "Adidas",
        quality: "High",
    },
    {
        id: 2,
        title: "Fitness Gloves",
        brand: "Adidas",
        quality: "High",
    },
    {
        id: 3,
        title: "Fitness Gloves",
        brand: "Adidas",
        quality: "High",
    },
];
