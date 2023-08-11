import { ReactElement } from "react";
import DeleteButton from "../../components/DeleteButton";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button";
import styles from '../../assets/styles/Card.module.css';

export default function():ReactElement {
    return (
        <div className={styles.cardFace}>
            <DeleteButton />
            <TextInput top={50} bottom={46} />
            <nav className={styles.bottomNav}>
                <Button text='Cancel' />
                <Button text='Save' primary />
            </nav>
        </div>
    )
}