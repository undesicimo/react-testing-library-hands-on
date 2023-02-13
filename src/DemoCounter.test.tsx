import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import counterReducer from './features/counter/counterSlice';

import { DemoCounter } from './DemoCounter';

describe('render DemoCounter', () => {
    let store: Store<unknown, AnyAction>;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                counter: counterReducer,
            },
        });
    });

    it('should count by button press', () => {
        render(
            <Provider store={store}>
                <DemoCounter />
            </Provider>
        );

        expect(screen.getByTestId('count-element')).toHaveTextContent('0');
        fireEvent.click(
            screen.getByRole('button', { name: 'Increment value' })
        );
        fireEvent.click(
            screen.getByRole('button', { name: 'Increment value' })
        );
        expect(screen.getByTestId('count-element')).toHaveTextContent('2');
        fireEvent.click(
            screen.getByRole('button', { name: 'Decrement value' })
        );
        expect(screen.getByTestId('count-element')).toHaveTextContent('1');
    });
});
