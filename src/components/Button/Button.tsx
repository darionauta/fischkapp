import { MouseEventHandler, ReactElement } from "react";
import styles from './Button.module.css';

type ButtonProps = {
    text: string,
    primary?: boolean,
    onClick?: MouseEventHandler,
    disabled?: boolean
}

export default function({text, primary, onClick, disabled}: ButtonProps):ReactElement {
    
    return (
        <button className={`${styles.button} ${primary && styles.primary}`} onClick={onClick} disabled={disabled}>
            { text }
        </button>
    )
}