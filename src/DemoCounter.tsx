import styles from './Counter.module.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
    decrement,
    fetchUsers,
    increment,
    selectCount,
} from './features/counter/counterSlice';

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
            <div className={styles.row}>
                <button
                    className={styles.asyncButton}
                    onClick={() => {
                        console.log('check')
                        dispatch(fetchUsers());
                    }}>
                    Add Async
                </button>
            </div>
        </div>
    );
};
