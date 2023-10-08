import { ReactElement, useContext, useState, useEffect } from "react";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button";
import styles from '../../assets/styles/Card.module.css';
import { CardContext } from "../../context/CardContext";
import { CardsContext } from "../../context/CardsContext";
import { CardType, FaceProps } from "./types";
import useFetch from "../../hooks/useFetch";

export default function({ cardSide, setEditMode } : FaceProps):ReactElement {
    const { card, setText } = useContext(CardContext);
    const [ cardText, setCardText ] = useState<CardType>(card);
    const { removeCard, saveCards } = useContext(CardsContext);
    const { error, deleteCard, updateCard } = useFetch();
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        cardText.front.length > 0 && cardText.back.length > 0
            ? setIsError(false)
            : setIsError(true);

    }, [ cardText.front, cardText.back ])

    const handleDeleteClick = () => {
        if(!card?._id) return;
        deleteCard(card._id).then(() => removeCard(card));
        setEditMode(false);
    }

    const handleSaveClick = () => {
        if(isError) return;
        updateCard(cardText).then(() => {
            if(error) return;
            setText && setText(cardText);
            saveCards(cardText);
        });
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
            <TextInput 
                top={50} 
                bottom={46} 
                text={cardSide === 'front' ? cardText?.front : cardText?.back} 
                getText={handleGetText} 
                isError={isError} 
            />
            <nav className={styles.bottomNav}>
                <Button text='Cancel' onClick={handleCancel} />
                <Button text='Save' primary onClick={handleSaveClick} />
            </nav>
        </div>
    )
}