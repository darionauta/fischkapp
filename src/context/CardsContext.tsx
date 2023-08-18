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
    saveCards: (newCard: CardType) => void,
    removeCard: (card: CardType) => void
}

const CardsContext = createContext<CardsContextType>({
    cards: initialState,
    saveCards: () => {},
    removeCard: () => {}
});

function CardsContextProvider({ children }: PropsWithChildren) {
    const [ cards, setCards ] = useState<CardType[]>(initialState);

    const saveCards = (card: CardType):void => {
        let tmpCards = cards;
        let indexToUpdate = cards.findIndex(item => item.id === card.id);
        if(indexToUpdate > -1) { 
            tmpCards[indexToUpdate] = card;
            setCards([...tmpCards]);
        } else {
            setCards([ ...cards, card]);
        }
    }

    const removeCard = (card: CardType):void => {
        const tmpCards = cards.filter(item => item.id !== card.id);
        setCards([...tmpCards]);
        alert('The card has been removed');
    }

    return (
        <CardsContext.Provider value={{
            cards, 
            saveCards,
            removeCard
        }}>
            { children }
        </CardsContext.Provider>
    )
}

export { CardsContext, CardsContextProvider };