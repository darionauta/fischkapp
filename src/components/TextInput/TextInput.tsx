import { ReactElement, useRef, useEffect, useState, ChangeEvent } from "react";
import styles from './TextInput.module.css';

type TextProps = {
    top?: number;
    bottom?: number;
    getText?: (value: string) => void;
    text: string;
}

export default function({ top, bottom, getText, text }: TextProps):ReactElement {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [ value, setValue ] = useState(text);

    useEffect(() => {
        // inputRef.current?.focus();
        let textField = document.querySelectorAll('textarea')[0];
        textField.focus();
    }, []);
    
    useEffect(() => {
        if(!inputRef.current) return;
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }, [value]);

    const handleChangeText = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
        getText && getText(event.currentTarget.value);
    }

    const margins = {
        marginTop: 0,
        marginBottom: 0
    }
    if(top) { margins.marginTop = top};
    if(bottom) { margins.marginBottom = bottom};

    return (
        <div className={styles.container} style={margins}>
            <textarea 
                ref={inputRef} 
                data-testid="textarea" 
                className={styles.textarea} 
                rows={1} 
                onChange={handleChangeText} 
                value={value}></textarea>
        </div>
    )
}