import React, { useState } from 'react';
import styles from './Counter.module.css';

export const DemoCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label='Decrement value'
                    onClick={() => setCount(current => current - 1)}>
                    -
                </button>
                <span
                    className={styles.value}
                    data-testid='count-element'>
                    {count}
                </span>
                <button
                    className={styles.button}
                    aria-label='Increment value'
                    onClick={() => setCount(current => current + 1)}>
                    +
                </button>
            </div>
        </div>
    );
};
