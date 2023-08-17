import { ReactElement, useState } from "react";
import styles from '../../assets/styles/Card.module.css';
import FaceCard from "./FaceCard";
import Edit from "./Edit";
import { CardContextProvider } from "../../context/CardContext";
import { CardType } from "./types";

type Props = {
    card: CardType
}

export default function({ card }: Props):ReactElement {

    const [ isFlipped, setIsFlipped ] = useState(false);
    const [ isEditMode, setIsEditMode ] = useState(false);
    
    const flip = () => setIsFlipped(prev => !prev);
    
    return (
        <CardContextProvider data={card}>
            <div className={styles.card}>
                { 
                    isEditMode ? <Edit /> : 
                    <div className={`${styles.cardWrapper} ${isFlipped ? styles.isFlipped : ''}`}>
                        <FaceCard cardSide='front' flip={flip} setEditMode={setIsEditMode} />
                        <FaceCard cardSide='back' flip={flip} setEditMode={setIsEditMode} />
                    </div>
                }
            </div>
        </CardContextProvider>
    )
}