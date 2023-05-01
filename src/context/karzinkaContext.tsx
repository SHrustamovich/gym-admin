import { FC, useContext, useState, ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks/useLacalStorage";

interface KarzinkaContextProps {
    children: ReactNode;
}

export interface CartItem {
    id: number;
    photo: string;
    price: string;
    product_name: string;
    product_type: string;
    product_type_id: number;
    quantity: number;
    supplier: string;
}

export interface CartData extends CartItem {
    quantity: number;
}

interface CardContextI {
    getData: (data: CartItem) => void;
    incrateQuantity: (id: number) => void;
    decrateQuantity: (id: number) => void;
    removeItem: (id: number) => void;
    cardData: CartData[];
}

const CardContext = createContext({} as CardContextI);

export function useCardContext() {
    return useContext(CardContext);
}

const KarzinkaContext: FC<KarzinkaContextProps> = ({ children }) => {
    const [cardData, setCardData] = useLocalStorage<CartData[]>("data", []);

    function getData(data: CartItem) {
        const conditionArr = cardData.some((el) => el.id === data.id);
        if (conditionArr) {
            setCardData((prev) => {
                return prev.map((el) => {
                    if (el.id === data.id) {
                        el.quantity = el.quantity + 1;
                        return el;
                    }
                    return el;
                });
            });
        } else {
            setCardData((prev) => [...prev, { ...data, quantity: 1 }]);
        }
    }

    function incrateQuantity(id: number) {
        const conditionArr = cardData.some((el) => el.id === id);
        if (conditionArr) {
            setCardData((prev) => {
                return prev.map((el) => {
                    if (el.id === id) {
                        el.quantity = el.quantity + 1;
                        return el;
                    }
                    return el;
                });
            });
        }
    }

    function decrateQuantity(id: number) {
        const conditionArr = cardData.some((el) => el.id === id);
        if (conditionArr) {
            setCardData((prev) => {
                return prev.map((el) => {
                    if (el.id === id && el.quantity > 1) {
                        el.quantity = el.quantity - 1;
                        return el;
                    }
                    return el;
                });
            });
        }
    }

    function removeItem(id: number) {
        const conditionArr = cardData.some((el) => el.id === id);
        if (conditionArr) {
            setCardData((prev) => {
                return prev.filter((item) => item.id !== id);
            });
        }
    }

    return (
        <div>
            <CardContext.Provider
                value={{
                    getData,
                    cardData,
                    incrateQuantity,
                    decrateQuantity,
                    removeItem,
                }}
            >
                {children}
            </CardContext.Provider>
        </div>
    );
};
export default KarzinkaContext;
