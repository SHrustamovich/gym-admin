import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
} from "react";
import { useLocalStorage } from "../hooks/useLacalStorage";

interface KarzinkaContextProps {
    children: ReactNode;
}

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
    getData: (data: CardItem) => void;
    incrementCount: (id: number) => void;
    decrementCount: (id: number) => void;
    cardData: CardData[];
    setCardData: Dispatch<SetStateAction<CardData[]>>;
}
const CardContext = createContext({} as CardContextI);

export function useCardContext() {
    return useContext(CardContext);
}

export const KarzinkaContext: FC<KarzinkaContextProps> = ({ children }) => {
    const [cardData, setCardData] = useLocalStorage<CardData[]>("data", []);

    function getData(data: CardItem) {
        const contationArr = cardData.some((el) => el.id === data.id);

        if (contationArr) {
            setCardData((item) => {
                return item.map((el) =>
                    el.id === data.id ? { ...el, count: el.count + 1 } : el
                );
            });
        } else {
            setCardData([...cardData, { ...data, count: 1 }]);
        }
    }

    function incrementCount(id: number) {
        const contationArr = cardData.some((el) => el.id === id);

        if (contationArr) {
            setCardData((item) => {
                return item.map((el) =>
                    el.id === id ? { ...el, count: el.count + 1 } : el
                );
            });
        } else {
            setCardData(cardData);
        }
    }

    function decrementCount(id: number) {
        setCardData((item) => {
            return item.map((el) =>
                el.id === id && el.count > 1
                    ? { ...el, count: el.count - 1 }
                    : el
            );
        });
    }

    return (
        <div>
            <CardContext.Provider
                value={{
                    getData,
                    cardData,
                    incrementCount,
                    decrementCount,
                    setCardData,
                }}
            >
                {children}
            </CardContext.Provider>
        </div>
    );
};
