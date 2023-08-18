import { ReactElement, useContext } from "react";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button";
import styles from '../../assets/styles/Card.module.css';
import { CardContext } from "../../context/CardContext";
import { CardsContext } from "../../context/CardsContext";
import { CardProps } from "./types";

export default function({setEditMode} : CardProps):ReactElement {
    const cardData = useContext(CardContext);
    const { removeCard } = useContext(CardsContext);

    const handleClick = () => {
        removeCard(cardData);
        setEditMode(false);
    }

    return (
        <div className={styles.cardFace}>
            <DeleteButton onClick={handleClick} />
            <TextInput top={50} bottom={46} />
            <nav className={styles.bottomNav}>
                <Button text='Cancel' />
                <Button text='Save' primary />
            </nav>
        </div>
    )
}