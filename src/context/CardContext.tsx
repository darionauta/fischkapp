import { PropsWithChildren, createContext, useState } from "react";
import { CardType } from "../layouts/Card/types";

const initialState = {front: '', back: '', id: 0}

interface Props extends PropsWithChildren {
    card: CardType;
    setText?: (card: CardType) => void;
}

const CardContext = createContext<Props>({
    card: initialState
});


function CardContextProvider({ children, card }: Props) {
    const [ cardsText, setCardsText ] = useState(card);
    
    const setText = (text: CardType): void => {
        setCardsText(text);
    }

    return (
        <CardContext.Provider value={{
            card: cardsText,
            setText
        }}>
            { children }
        </CardContext.Provider>
    )
}

export { CardContext, CardContextProvider };