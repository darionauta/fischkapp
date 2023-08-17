import { PropsWithChildren, createContext } from "react";
import { CardType } from "../layouts/Card/types";

const initialState = {front: '', back: '', id: 0}

const CardContext = createContext<CardType>(initialState);

interface Props extends PropsWithChildren {
    data: CardType;
}

function CardContextProvider({ children, data }: Props) {
    
    return (
        <CardContext.Provider value={data}>
            { children }
        </CardContext.Provider>
    )
}

export { CardContext, CardContextProvider };