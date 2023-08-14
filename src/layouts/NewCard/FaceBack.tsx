import { ReactElement, useContext } from "react";
import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import styles from '../../assets/styles/Card.module.css';
import { FlipType } from "./types";
import { NewCardContext } from "../../context/NewCardContext";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function({ flip }: FlipType):ReactElement {

    const { setText, cardsText } = useContext(NewCardContext) ?? {};
    const [ storageValue, setStorageValue ] = useLocalStorage({key: 'cards', initialState: []});

    const handleGetText = (value: string) => {
        setText && cardsText && setText({ ...cardsText, back: value });
    }

    const handleClickSave = () => {
        setStorageValue([...storageValue, {...cardsText, id: Date.now()}]);
    }

    return (
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
            <span className={styles.frontFaceText}>
                { cardsText && cardsText.front }
            </span>
            <DeleteButton />
            <TextInput top={8} bottom={46} getText={handleGetText} />
            <nav className={styles.bottomNav}>
                <Button text='Back' onClick={_ => flip(false)} />
                <Button text='Save' primary onClick={handleClickSave} />
            </nav>
        </div>
    )
}