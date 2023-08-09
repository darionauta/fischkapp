import { ReactElement } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from './NewCard.module.css';

export default function ():ReactElement {
    
    return (
        <div className={styles.cardFace}>
            <TextInput top={50} bottom={24} />
            <nav className={styles.bottomNav}>
                <Button text="Cancel" />
                <Button text="Next" primary />
            </nav>
        </div>
    )
}