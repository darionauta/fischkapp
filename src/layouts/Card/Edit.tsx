import { ReactElement, useContext, useState, useEffect } from "react";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button";
import styles from '../../assets/styles/Card.module.css';
import { CardContext } from "../../context/CardContext";
import { CardsContext } from "../../context/CardsContext";
import { CardType, FaceProps } from "./types";

export default function({ cardSide, setEditMode } : FaceProps):ReactElement {
    const { card, setText } = useContext(CardContext);
    const [ cardText, setCardText ] = useState<CardType>(card);
    const { removeCard, saveCards } = useContext(CardsContext);

    const handleDeleteClick = () => {
        removeCard(card);
        setEditMode(false);
    }

    const handleSaveClick = () => {
        setText && setText(cardText);
        saveCards(cardText);
        setEditMode(false);
    }

    const handleCancel = ():void => { 
        setEditMode(false);
        setCardText(card);
    }

    const handleGetText = (text: string) => {
        if(!setText) return;
        cardSide === 'front' ?
            setCardText({ ...card, front: text}) :
            setCardText({ ...card, back: text});
    }

    return (
        <div className={styles.cardFace}>
            <DeleteButton onClick={handleDeleteClick} />
            <TextInput top={50} bottom={46} text={cardSide === 'front' ? cardText?.front : cardText?.back} getText={handleGetText} />
            <nav className={styles.bottomNav}>
                <Button text='Cancel' onClick={handleCancel} />
                <Button text='Save' primary onClick={handleSaveClick} />
            </nav>
        </div>
    )
}