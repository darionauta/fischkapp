import { ReactElement, useContext } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from '../../assets/styles/Card.module.css';
import { NewCardContext } from "../../context/NewCardContext";
import { FlipType } from "./types";

export default function ({ flip }: FlipType):ReactElement {
    const { showNewCard, setText, cardsText } = useContext(NewCardContext) ?? {};

    const handleClick = () => {
        flip(true);
    }
    
    const handleFrontText = (value: string) => {
        setText && cardsText && setText({ ...cardsText, front: value});
    }

    if( !showNewCard) return ( <></> )
    return (
        <div className={styles.cardFace}>
            <TextInput top={50} bottom={46} getText={handleFrontText} />
            <nav className={styles.bottomNav}>
                <Button text="Cancel" onClick={_ => showNewCard(false)} />
                <Button text="Next" primary onClick={handleClick}/>
            </nav>
        </div>
    )
}