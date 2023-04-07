import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import { UserDataI } from "../context/types";
import { usePostRequest } from "../hooks/request";
import { domen, authRefresh } from "./urls";

interface Axios extends AxiosInstance {
    [key: string]: any;
}

const $authHost: Axios = axios.create({
    baseURL: `${domen}`,
    withCredentials: true,
});

// $authHost.interceptors.request.use(
//     (config) => {
//         const accessToken: string | undefined = Cookies.get("Authentication");
//         if (config.headers) {
//             if (Boolean(accessToken)) {
//                 const headers = {
//                     ...config.headers,
//                 } as Partial<AxiosRequestHeaders>;
//                 headers["Authorization"] = `Bearer ${accessToken}`;
//             }
//         }
//         return config;
//     },
//     (error) => {
//         Promise.reject(error);
//     }
// );

$authHost.interceptors.response.use(
    (response: any) => {
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            const postAuth = usePostRequest<UserDataI>({ url: authRefresh });
            const { response, error } = postAuth;
        }
        return Promise.reject(error);
    }
);
export { $authHost };
