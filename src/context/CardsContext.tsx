import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { CardType } from "../layouts/Card/types";
import useFetch from "../hooks/useFetch";
import AppHeader from "../layouts/AppHeader";


const initialState: CardType[] = [];

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
    const { error, loading, getAll } = useFetch();

    useEffect(() => {
        getAll().then(setCards);
    }, [ getAll ]);

    const saveCards = (card: CardType):void => {
        let tmpCards = cards;
        let indexToUpdate = cards.findIndex(item => item._id === card._id);
        if(indexToUpdate > -1) { 
            tmpCards[indexToUpdate] = card;
            setCards([...tmpCards]);
        } else {
            setCards([ ...cards, card]);
        }
    }

    const removeCard = (card: CardType):void => {
        const tmpCards = cards.filter(item => item._id !== card._id);
        setCards([...tmpCards]);
        alert('The card has been removed');
    }

    const Loading = () => {
        return <div style={{ marginTop: '150px' }}>Loading...</div>
    }

    if(error) {
        return <div style={{ marginTop: '150px'}}>{error}</div>
    }

    return (
        <CardsContext.Provider value={{
            cards, 
            saveCards,
            removeCard
        }}>
            <AppHeader />
            { loading ? <Loading /> : children }
        </CardsContext.Provider>
    )
}

export { CardsContext, CardsContextProvider };