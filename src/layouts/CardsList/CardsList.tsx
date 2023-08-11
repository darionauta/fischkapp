import { ReactElement, ReactNode } from "react";
import styles from './CardsList.module.css';

type CardsListProps = {
    children: ReactNode
}

export default function({ children }: CardsListProps):ReactElement {
    return (
        <div className={styles.cardsList}>
            { children }
        </div>
    )
}