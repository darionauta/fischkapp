import { ReactElement, useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from '../../assets/styles/Card.module.css';
import { NewCardContext } from "../../context/NewCardContext";
import { FlipType } from "./types";
import useCheckCardText from "../../hooks/useCheckCardText";

export default function ({ flip, isFlipped }: FlipType):ReactElement {
    const { showNewCard, setText, cardsText } = useContext(NewCardContext) ?? {};
    const [ isNextButtonDisabled ] = useCheckCardText(); 

    const handleClick = () => {
        flip(true);
    }

    const handleCancelClick = () => {
        showNewCard && showNewCard(false);
        setText && setText({front: '', back: ''});
    }
    
    const handleFrontText = (value: string) => {
        !isFlipped && setText && cardsText && setText({ ...cardsText, front: value});
    }

    if( !showNewCard) return ( <></> )
    return (
        <div className={styles.cardFace}>
            <TextInput data-testid="input-front" text="" top={50} bottom={46} getText={handleFrontText} />
            <nav className={styles.bottomNav}>
                <Button text="Cancel" onClick={handleCancelClick} />
                <Button text="Next" primary onClick={handleClick} disabled={isNextButtonDisabled} />
            </nav>
        </div>
    )
}