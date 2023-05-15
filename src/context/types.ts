import { ReactElement } from "react";

export interface UserDataI {
    action_message: string;
    created_at: string;
    currentHashedRefreshToken: string;
    fullname: string;
    id: number;
    moderator_id: number;
    phone: string;
    role: string;
    status: string;
    updated_at: string;
    username: string;
}

export interface LoginReqI {
    accessTokenCookie: string;
    refreshTokenCookie: string;
}

export interface UserI {
    user: UserDataI | null;
    setUserData: (value: React.SetStateAction<UserDataI | null>) => void;
    loginRefetch: () => void;
}

export interface UserProviderI {
    children: ReactElement;
}

export interface ITokens {
    accessToken: string | null;
    refreshToken: string | null;
}

export interface IUser {
    id: number;
    password: string;
    role: string;
    status: string;
    username: string;
}

export interface IUserData {
    user: IUser;
    tokens: ITokens;
}

export interface IUserContext {
    userData: IUserData;
    setTokens: (key: string, value: string) => void;
}

export interface LogoutModalI {
    handleCancel: () => void;
    openMadal: boolean;
    logoutReq: () => void;
}

export interface CheckInModalI {
    checkInModal: boolean;
    onCancelModal: () => void;
    checkInIndex: number | null;
}
