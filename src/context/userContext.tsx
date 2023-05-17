import { createContext, useState, FC } from "react";
import { IUser, IUserContext, UserProviderI } from "./types";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");

const UserContextInitials = {
    user: {} as IUser,
    tokens: {
        accessToken,
        refreshToken,
    },
};

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: FC<UserProviderI> = ({ children }) => {
    const [userData, setUserData] = useState(UserContextInitials);

    function setTokens(accessToken: string, refreshToken: string) {
        setUserData({ ...userData, tokens: { accessToken, refreshToken } });
    }

    return (
        <UserContext.Provider value={{ userData, setTokens }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
