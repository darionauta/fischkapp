import { ReactElement, useState } from "react";
import styles from "./AppHeader.module.css";
import Dolphin from '../../components/icons/Dolphin';
import Counter from "../../components/Counter";
import AddButton from "../../components/AddButton";

export default function():ReactElement {
  const [ cardsCounter, setCardsCounter ] = useState(0);
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Dolphin />
        <Counter value={cardsCounter} />
        <AddButton />
      </nav>
    </header>
  )
};
