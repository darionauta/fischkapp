import { ReactElement, useContext, useState, useRef } from 'react';
import FaceFront from './FaceFront';
import FaceBack from './FaceBack';
import styles from '../../assets/styles/Card.module.css';
import { NewCardContext } from '../../context/NewCardContext';

export default function():ReactElement {

    const [ isFlipped, setIsFlipped ] = useState(false);
    const newCard = useContext(NewCardContext);

    const flip = () => setIsFlipped(prev => !prev);

    if( !newCard?.isNewCardVisible ) return ( <></>)
    return (
        <div className={styles.card}>
            <div className={`${styles.cardWrapper} ${isFlipped ? styles.isFlipped : ''}`}>
                <FaceFront flip={flip} />
                <FaceBack flip={flip} />
            </div>
        </div>
    )
}