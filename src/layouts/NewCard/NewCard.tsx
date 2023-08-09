import { ReactElement } from 'react';
import FaceFront from './FaceFront';
import FaceBack from './FaceBack';
import styles from './NewCard.module.css';

export default function():ReactElement {

    return (
        <div className={styles.card}>
            <div className={styles.cardWrapper}>
                <FaceFront />
                <FaceBack />
            </div>
        </div>
    )
}