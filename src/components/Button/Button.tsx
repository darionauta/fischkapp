import { MouseEventHandler, ReactElement } from "react";
import styles from './Button.module.css';

type ButtonProps = {
    text: string,
    primary?: boolean,
    onClick?: MouseEventHandler
}

export default function({text, primary, onClick}: ButtonProps):ReactElement {
    
    return (
        <button className={`${styles.button} ${primary && styles.primary}`} onClick={onClick}>
            { text }
        </button>
    )
}