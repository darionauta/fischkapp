import { ReactElement } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from '../../assets/styles/Card.module.css';

export default function ():ReactElement {
    
    return (
        <div className={styles.cardFace}>
            <TextInput top={50} bottom={46} />
            <nav className={styles.bottomNav}>
                <Button text="Cancel" />
                <Button text="Next" primary />
            </nav>
        </div>
    )
}