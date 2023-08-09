import { ReactElement } from "react";
import styles from './Button.module.css';

type ButtonProps = {
    text: string,
    primary?: boolean
}

export default function({text, primary}: ButtonProps):ReactElement {
    
    return (
        <button className={`${styles.button} ${primary && styles.primary}`}>
            { text }
        </button>
    )
}