import { PropsWithChildren, createContext, useState } from "react";
import { CardType } from "../layouts/Card/types";

export type NewCard = {
    isNewCardVisible: boolean,
    showNewCard: (state:boolean) => void,
    cardsText: CardType,
    setText: (value: CardType) => void
};

export type NewCardContextType = NewCard | null;

const initialState = {front: '', back: '', id: 0}

const NewCardContext = createContext<NewCardContextType>({
    isNewCardVisible: false,
    showNewCard: () => {},
    cardsText: initialState,
    setText: () => {}
});

function NewCardContextProvider({ children }: PropsWithChildren) {
    const [ isNewCardVisible, setIsNewCardVisible ] = useState(false);
    const [ cardsText, setCardsText ] = useState(initialState);

    const showNewCard = (state: boolean): void => {
        setIsNewCardVisible(state);
    }

    const setText = (value: CardType): void => {
        setCardsText(value);
    }
    
    return (
        <NewCardContext.Provider value={{ 
            isNewCardVisible, 
            showNewCard,
            cardsText,
            setText
             }}>
            { children }
        </NewCardContext.Provider>
    )
}

export { NewCardContext, NewCardContextProvider };