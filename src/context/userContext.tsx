import { createContext, useState, FC, useEffect } from "react";
import { useLoad } from "../hooks/request";
import { getauth } from "../utils/urls";
import { UserDataI, UserI, UserProviderI } from "./types";

export const UserContext = createContext<UserI>({} as UserI);

const UserProvider: FC<UserProviderI> = ({ children }) => {
    const [userData, setUserData] = useState<UserDataI | null>(null);

    const authGetRequest = useLoad<UserDataI>({ url: getauth });
    const { response, request } = authGetRequest;

    useEffect(() => {
        if (response?.status == "active") {
            setUserData(response);
        } else {
            setUserData(null);
        }
    }, [response]);

    const loginRefetch = () => {
        request();
    };

    return (
        <UserContext.Provider
            value={{ user: userData, setUserData: setUserData, loginRefetch }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
