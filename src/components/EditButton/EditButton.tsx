import { ReactElement } from "react";
import styles from './EditButton.module.css';
import Pencil from "../icons/Pencil";

type ButtonProps = {
    setEdit: (state:boolean) => void;
}

export default function({ setEdit }: ButtonProps):ReactElement {

    return (
        <button data-testid="edit-button" className={styles.editButton} onClick={ _ => setEdit(true) }>
            <Pencil />
        </button>
    )
}