import { useEffect, useState, useContext } from "react";
import { NewCardContext } from "../context/NewCardContext";

export default function() {
    const { cardsText } = useContext(NewCardContext) ?? {};
    const [ isNewCardNextButtonDisabled, setIsNewCardNextButtonDisabled ] = useState(true);
    const [ isNewCardSaveButtonDisabled, setIsNewCardSaveButtonDisabled ] = useState(true);

    useEffect(() => {
        if(!cardsText) return;

        cardsText.front.length > 0
            ? setIsNewCardNextButtonDisabled(false)
            : setIsNewCardNextButtonDisabled(true);

        cardsText.back.length > 0
            ? setIsNewCardSaveButtonDisabled(false)
            : setIsNewCardSaveButtonDisabled(true);

    }, [ cardsText?.front, cardsText?.back]);

    return [ isNewCardNextButtonDisabled, isNewCardSaveButtonDisabled ];
}