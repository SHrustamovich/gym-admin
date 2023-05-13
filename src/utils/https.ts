import axios, { AxiosInstance } from "axios";
import { getLoclalStorage, setLoclalStorage } from "./helpers";
import { domen, authRefresh, mediaApi } from "./urls";

interface Axios extends AxiosInstance {
    [key: string]: any;
}

const $authHost: Axios = axios.create({
    baseURL: `${domen}`,
});

export const $mediaApi: Axios = axios.create({
    baseURL: `${mediaApi}`,
});

$authHost.interceptors.request.use(
    (config) => {
        const accessToken = getLoclalStorage("accessToken");

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
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        let refreshToken = getLoclalStorage("refreshToken");

        if (error.response.status === 401 && !!refreshToken) {
            const resulttRes = await $authHost.post(authRefresh, {
                refreshToken: refreshToken,
            });

            if (resulttRes.status === 201) {
                setLoclalStorage("accessToken", resulttRes.data.accessToken);

                return $authHost(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);
export { $authHost };
