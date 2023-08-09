import { ReactElement } from "react";
import styles from './TextInput.module.css';

type TextProps = {
    top?: number;
    bottom?: number;
}

export default function({ top, bottom }: TextProps):ReactElement {
    const margins = {
        marginTop: 0,
        marginBottom: 0
    }
    if(top) { margins.marginTop = top};
    if(bottom) { margins.marginBottom = bottom};

    return (
        <div className={styles.container} style={margins}>
            <span className={styles.textarea} contentEditable></span>
        </div>
    )
}