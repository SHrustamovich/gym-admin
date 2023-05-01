import { useEffect, useState } from "react";

type typeReturn<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalStorage = <T,>(
    key: string,
    initialValue: T
): typeReturn<T> => {
    const [value, setValue] = useState<T>(() => {
        if (!initialValue) return;
        try {
            const jsonValue = localStorage.getItem(key);
            return jsonValue ? JSON.parse(jsonValue) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    useEffect(() => {
        if (value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.log(error);
            }
        }
    }, [key, value]);

    return [value, setValue];
};
