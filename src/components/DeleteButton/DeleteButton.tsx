import { ReactElement, useContext } from "react";
import TrashCan from "../icons/TrashCan";
import styles from './DeleteButton.module.css';
import { CardContext } from "../../context/CardContext";

type Props = {
    onClick: () => void
}

export default function({ onClick }: Props):ReactElement {

    return (
        <button className={styles.deleteButton} onClick={onClick}>
            <TrashCan />
        </button>
    )
}