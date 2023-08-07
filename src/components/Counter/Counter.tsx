import { ReactElement } from 'react';
import styles from './Counter.module.css'

type CounterProps = {
    value: number;
}

export default function({ value }: CounterProps):ReactElement {
    return (
        <div className={styles.counter}>
           <div className={styles.text}>
                Cards:<span>{value}</span>
           </div>
        </div>
    )
}