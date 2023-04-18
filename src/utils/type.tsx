import { ReactElement } from "react";

export interface ISidebarData {
    id: number;
    title: string;
    path: string;
    icon: ReactElement;
    companents: ReactElement;
}

export interface ILangData {
    id: number;
    key: string;
    title: string;
    icon: string;
}

