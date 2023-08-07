import { ReactElement } from "react";
import styles from './AddButton.module.css';
import Plus from "../icons/Plus";

export default function():ReactElement {
    return (
        <button className={styles.addButton}>
            <Plus />
        </button>
    )
}