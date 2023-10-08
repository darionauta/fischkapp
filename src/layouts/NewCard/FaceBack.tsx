import { ReactElement, useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import styles from '../../assets/styles/Card.module.css';
import { FlipType } from "./types";
import { NewCardContext } from "../../context/NewCardContext";
import { CardsContext } from "../../context/CardsContext";
import useFetch from "../../hooks/useFetch";
import useCheckCardText from "../../hooks/useCheckCardText";

export default function({ flip, isFlipped }: FlipType):ReactElement {

    const { setText, cardsText, showNewCard } = useContext(NewCardContext) ?? {};
    const { saveCards } = useContext(CardsContext);
    const { error, saveCard } = useFetch();
    const [, isSaveButtonDisabled ] = useCheckCardText();
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        if(!cardsText) return;
        if(!isSaveButtonDisabled) setIsError(false);
    }, [ cardsText?.back ]);

    useEffect(() => {
        isFlipped && document.querySelectorAll('textarea')[1].focus();
    }, [isFlipped]);

    const handleGetText = (value: string) => {
        isFlipped && setText && cardsText && setText({ ...cardsText, back: value });
    }

    const handleClickSave = () => {
        if(isError) return;
        if(!cardsText) return;
        if(isSaveButtonDisabled) {
            setIsError(true);
            return;
        };
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
            <TextInput 
                data-testid="inoput-back" 
                top={8} 
                bottom={46} 
                getText={handleGetText} 
                text=''
                isError={isError}
            />
            <nav className={styles.bottomNav}>
                <Button text='Back' onClick={_ => flip(false)} />
                <Button text='Save' primary onClick={handleClickSave} />
            </nav>
        </div>
    )
}