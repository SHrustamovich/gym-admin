import { useCallback, useMemo, useContext } from "react";
import { UserContext } from "../context/userContext";

function useAuthentication() {
    const { user } = useContext(UserContext);

    const obj = useCallback(() => {
        return { login: user != null };
    }, [user]);
    return useMemo(obj, [user]);
}

export default useAuthentication;
