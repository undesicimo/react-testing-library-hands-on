import React from 'react';
import styles from './Counter.module.css';
import {
    decrement,
    increment,
    selectCount,
} from './features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

export const DemoCounter = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}>
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
                    onClick={() => dispatch(increment())}>
                    +
                </button>
            </div>
        </div>
    );
};
