import { ReactElement, useContext } from "react";
import styles from '../../assets/styles/Card.module.css';
import EditButton from "../../components/EditButton";
import { FaceProps } from './types';
import { CardContext } from "../../context/CardContext";

export default function({ flip, setEditMode, cardSide }: FaceProps):ReactElement {
    const { card } = useContext(CardContext);
    
    const classNames = `${styles.cardFace} ${cardSide === 'back' ? styles.cardFaceBack : ''}`;

    return (
        <div className={classNames}>
            <EditButton setEdit={setEditMode} />
            <div className={styles.cardContent} onClick={flip}>
                { cardSide === 'front' ? card.front : card.back }
            </div>
        </div>
    )
}