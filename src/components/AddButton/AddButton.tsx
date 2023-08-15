import { ReactElement, useContext } from "react";
import styles from './AddButton.module.css';
import Plus from "../icons/Plus";
import { NewCardContext } from "../../context/NewCardContext";

export default function():ReactElement {
    const { showNewCard } = useContext(NewCardContext) ?? {};
    
    if(!showNewCard) return ( <></> )
    return (
        <button className={styles.addButton} onClick={_ => showNewCard(true)}>
            <Plus />
        </button>
    )
}