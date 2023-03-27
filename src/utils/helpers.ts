export const postData = (obj: any, n = []) => {
    let newObj: any = structuredClone(obj);
    for (let el in newObj) {
        if (n.includes(el as never)) {
            delete newObj[el];
        }
    }
    return newObj;
};

export const shortTitle = (title: string) => {
    return title.length > 20 ? title.slice(0, 20) + "..." : title;
};

export enum LangEnums {
    Eng = "eng",
    UZ = "uz",
    RU = "ru",
}

export type LangDataT = {
    id: number;
    key: string;
    title: string;
    icon: string;
};

export function getImage(list: LangDataT[], key: string) {
    for (let el of list) {
        if (el.key === key) {
            return el.icon;
        }
    }
}
