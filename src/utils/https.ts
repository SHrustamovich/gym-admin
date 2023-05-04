import axios, { AxiosInstance } from "axios";
import { UserDataI } from "../context/types";
import { useLoad, usePostRequest } from "../hooks/request";
import { domen, authRefresh } from "./urls";
import { getCookie } from "./helpers";

interface Axios extends AxiosInstance {
    [key: string]: any;
}

const $authHost: Axios = axios.create({
    baseURL: `${domen}`,
    headers: {
        Authorization: `Bearer ${getCookie("Authentication")}`,
        Refresh: getCookie("refresh"),
    },
});

$authHost.interceptors.response.use(
    (response: any) => {
        return response;
    },
    async function (error) {
        console.log(error);
        if (error.response.status === 401) {
            console.log("up");
            const res = await $authHost.get(authRefresh);
            console.log("down");
        }
        return Promise.reject(error);
    }
);
export { $authHost };
