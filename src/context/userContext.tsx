import { createContext, useState, FC, useEffect } from "react";
import { useLoad } from "../hooks/request";
import { getauth } from "../utils/urls";
import { UserDataI, UserI, UserProviderI } from "./types";

export const UserContext = createContext<UserI>({} as UserI);

const UserProvider: FC<UserProviderI> = ({ children }) => {
    const [userData, setUserData] = useState<UserDataI | null>(null);

    const authGetRequest = useLoad<UserDataI>({ url: getauth });
    const { response } = authGetRequest;

    useEffect(() => {
        if (response?.status == "active") {
            setUserData(response);
        } else {
            setUserData(null);
        }
    }, [response]);

    

    return (
        <UserContext.Provider
            value={{ user: userData, setUserData: setUserData }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
