import { ReactElement, useContext } from "react";
import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import styles from '../../assets/styles/Card.module.css';
import { FlipType } from "./types";
import { NewCardContext } from "../../context/NewCardContext";
import { CardType } from "../Card/types";
import { CardsContext } from "../../context/CardsContext";

export default function({ flip }: FlipType):ReactElement {

    const { setText, cardsText, showNewCard } = useContext(NewCardContext) ?? {};
    const { saveCards } = useContext(CardsContext);

    const handleGetText = (value: string) => {
        setText && cardsText && setText({ ...cardsText, back: value });
    }

    const handleClickSave = () => {
        if(!cardsText) return;
        const newCard: CardType = {
            ...cardsText, id: Date.now()
        }
        saveCards(newCard);
        showNewCard && showNewCard(false);
        flip(false);
        setText && setText({ front: '', back: '', id: 0});
    }

    const handleCancel = ():void => { 
        showNewCard && showNewCard(false);
        flip(false);
        setText && setText( { front: '', back: '', id: 0})
    }


    return (
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
            <span className={styles.frontFaceText}>
                { cardsText && cardsText.front }
            </span>
            <DeleteButton onClick={handleCancel} />
            <TextInput top={8} bottom={46} getText={handleGetText} />
            <nav className={styles.bottomNav}>
                <Button text='Back' onClick={_ => flip(false)} />
                <Button text='Save' primary onClick={handleClickSave} />
            </nav>
        </div>
    )
}