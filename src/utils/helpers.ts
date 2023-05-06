import Cookies from "universal-cookie";

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

export const phoneNamberCheck = (value: string) => {
    const x = value
        .replace(/\D/g, "")
        .match(
            /(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/
        ) as RegExpMatchArray;

    const result = `${x[1] !== "" ? "+" + x[1] : ""}${
        x[2] !== "" ? " (" + x[2] : ""
    }${x[3] !== "" ? ") " + x[3] : ""}${x[4] !== "" ? " " + x[4] : ""}${
        x[5] !== "" ? " " + x[5] : ""
    }`;

    return result;
};

const coookie = new Cookies();

export const getCookie = (key: string): string | null => {
    return coookie.get(key);
};

export const setCookie = (key: string, value: string) => {
    coookie.set(key, value);
};

export const clearCookie = (key: string) => {
    coookie.remove(key);
};

export const clearCookieAuth = () => {
    clearCookie("Authentication");
    clearCookie("Refresh");
};

// export const saveToCookie = (name:string,value:string) => {
//     document.cookie = {name}={JSON.stringify(formData)}
//   }
