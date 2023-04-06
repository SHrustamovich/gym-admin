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

export interface UserI {
    user: UserDataI | null;
    setUserData: (value: React.SetStateAction<UserDataI | null>) => void;
}

export interface UserProviderI {
    children: ReactElement;
}
