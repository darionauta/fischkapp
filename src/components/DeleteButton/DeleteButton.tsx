import { ReactElement } from "react";
import TrashCan from "../icons/TrashCan";
import styles from './DeleteButton.module.css';

export default function():ReactElement {
    return (
        <button className={styles.deleteButton}>
            <TrashCan />
        </button>
    )
}