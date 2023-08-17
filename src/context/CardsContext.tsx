import { PropsWithChildren, createContext, useState } from "react";
import { CardType } from "../layouts/Card/types";

const initialState: CardType[] = [
    {
        id: 0,
        front: 'Fish',
        back: 'Il pesco'
    }
];

export type CardsContextType = {
    cards: CardType[], 
    saveCards: (newCard: CardType) => void}

const CardsContext = createContext<CardsContextType>({
    cards: initialState,
    saveCards: () => {}
});

function CardsContextProvider({ children }: PropsWithChildren) {
    const [ cards, setCards ] = useState<CardType[]>(initialState);

    const saveCards = (newCard: CardType):void => {
        setCards([ ...cards, newCard]);
    }
    
    return (
        <CardsContext.Provider value={{cards, saveCards}}>
            { children }
        </CardsContext.Provider>
    )
}

export { CardsContext, CardsContextProvider };