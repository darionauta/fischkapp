import { ReactElement, useContext, useState } from "react";
import styles from "./AppHeader.module.css";
import Dolphin from '../../components/icons/Dolphin';
import Counter from "../../components/Counter";
import AddButton from "../../components/AddButton";
import { CardsContext } from "../../context/CardsContext";

export default function():ReactElement {
  const { cards } = useContext(CardsContext);
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Dolphin />
        <Counter value={cards.length} />
        <AddButton />
      </nav>
    </header>
  )
};
