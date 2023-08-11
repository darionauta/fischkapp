import { ReactElement } from "react";
import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import styles from '../../assets/styles/Card.module.css';

export default function():ReactElement {
    return (
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
            <span className={styles.frontFaceText}></span>
            <DeleteButton />
            <TextInput top={8} bottom={46} />
            <nav className={styles.bottomNav}>
                <Button text='Back' />
                <Button text='Save' primary />
            </nav>
        </div>
    )
}