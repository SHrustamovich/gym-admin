import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import { domen, authRefresh } from "./urls";

interface Axios extends AxiosInstance {
    [key: string]: any;
}

const $authHost: Axios = axios.create({
    baseURL: `${domen}`,
});

$authHost.interceptors.request.use(
    (config) => {
        const accessToken: string | null = localStorage.getItem("accessToken");

        if (config.headers) {
            if (Boolean(accessToken)) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
$authHost.interceptors.response.use(
    (response: any) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        let refreshToken = localStorage.getItem("refreshToken");

        if (error.response.status === 401 && !!refreshToken) {
            const resulttRes = await $authHost.post(authRefresh, {
                refreshToken: refreshToken,
            });
            if (resulttRes.status === 201) {
                localStorage.setItem(
                    "accessToken",
                    resulttRes.data.accessToken
                );
                return $authHost(originalRequest);
            }
        }
        return Promise.reject(error);
    }
);
export { $authHost };
