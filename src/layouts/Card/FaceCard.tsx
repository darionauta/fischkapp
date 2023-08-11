import { ReactElement, useState, useRef } from "react";
import styles from '../../assets/styles/Card.module.css';
import EditButton from "../../components/EditButton";
import Edit from "./Edit";
import { FaceProps } from './types';

export default function({ flip, setEditMode, cardSide }: FaceProps):ReactElement {
    
    const classNames = `${styles.cardFace} ${cardSide === 'back' ? styles.cardFaceBack : ''}`;

    return (
        <div className={classNames}>
            <EditButton setEdit={setEditMode} />
            <div className={styles.cardContent} onClick={flip}></div>
        </div>
    )
}