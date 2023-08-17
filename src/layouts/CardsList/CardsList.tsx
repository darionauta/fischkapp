import { ReactElement, ReactNode, useContext } from "react";
import styles from './CardsList.module.css';
import Card from "../Card";
import { CardType } from "../Card/types";
import { CardsContext } from "../../context/CardsContext";

type CardsListProps = {
    children?: ReactNode
}

export default function({ children }: CardsListProps):ReactElement {
    const { cards } = useContext(CardsContext);

    return (
        <div className={styles.cardsList}>
            { children }
            { cards && cards.map((item: CardType, index: number) => {
                return <Card card={item} key={index} />
            })}
        </div>
    )
}