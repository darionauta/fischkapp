import { ReactElement, useState } from "react";
import styles from '../../assets/styles/Card.module.css';
import FaceCard from "./FaceCard";
import Edit from "./Edit";

export default function():ReactElement {

    const [ isFlipped, setIsFlipped ] = useState(false);
    const [ isEditMode, setIsEditMode ] = useState(false);
    const flip = () => setIsFlipped(prev => !prev);
    
    return (
        <div className={styles.card}>
            { 
                isEditMode ? <Edit /> : 
                <div className={`${styles.cardWrapper} ${isFlipped ? styles.isFlipped : ''}`}>
                    <FaceCard cardSide='front' flip={flip} setEditMode={setIsEditMode} />
                    <FaceCard cardSide='back' flip={flip} setEditMode={setIsEditMode} />
                </div>
            }
        </div>
    )
}