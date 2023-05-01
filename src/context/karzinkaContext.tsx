import { createContext, FC, useContext } from "react";
import { useLocalStorage } from "../hooks/useLacalStorage";

export interface CardItem {
    id: number;
    photo: string;
    price: string;
    product_name: string;
    product_type: string;
    product_type_id: number;
    quantity: number;
    supplier: string;
}

export interface CardData extends CardItem {
    count: number;
}

interface CardContextI {
    gatData: (data: any) => void;
    incrementCount: (id: number) => void;
    decrementCount: (id: number) => void;
    cardData: CardData[];
}
const CardContext = createContext({} as CardContextI);

export function useCardContext() {
    return useContext(CardContext);
}

export const KarzinkaContext: FC = () => {
    const [cardData, setCardData] = useLocalStorage("data", []);
    return <div></div>;
};
