import { ReactElement, useContext } from "react";
import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import styles from '../../assets/styles/Card.module.css';
import { FlipType } from "./types";
import { NewCardContext } from "../../context/NewCardContext";
import { CardType, SaveCardProps } from "../Card/types";
import { CardsContext } from "../../context/CardsContext";
import useFetch from "../../hooks/useFetch";

export default function({ flip }: FlipType):ReactElement {

    const { setText, cardsText, showNewCard } = useContext(NewCardContext) ?? {};
    const { saveCards } = useContext(CardsContext);
    const { error, saveCard } = useFetch();
    

    const handleGetText = (value: string) => {
        setText && cardsText && setText({ ...cardsText, back: value });
    }

    const handleClickSave = () => {
        if(!cardsText) return;
        saveCard(cardsText).then(data => { 
            if(error || !data?.flashcard) return;
            const {front, back, _id} = data?.flashcard;
            saveCards({ front, back, _id});
        });
        showNewCard && showNewCard(false);
        flip(false);
        setText && setText({ front: '', back: ''});
    }

    const handleCancel = ():void => { 
        showNewCard && showNewCard(false);
        flip(false);
        setText && setText( { front: '', back: ''})
    }


    return (
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
            <span className={styles.frontFaceText}>
                { cardsText && cardsText.front }
            </span>
            <DeleteButton onClick={handleCancel} />
            <TextInput data-testid="inoput-back" top={8} bottom={46} getText={handleGetText} text='' />
            <nav className={styles.bottomNav}>
                <Button text='Back' onClick={_ => flip(false)} />
                <Button text='Save' primary onClick={handleClickSave} />
            </nav>
        </div>
    )
}