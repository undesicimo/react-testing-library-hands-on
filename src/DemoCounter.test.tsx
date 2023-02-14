import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import counterReducer from './features/counter/counterSlice';
import { DemoCounter } from './DemoCounter';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const mockUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496',
        },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
    },
};

const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(new Array(10).fill(mockUser)));
    })
);

describe('render DemoCounter', () => {
    let store: Store<unknown, AnyAction>;
    beforeAll(() => server.listen());
    beforeEach(() => {
        store = configureStore({
            reducer: {
                counter: counterReducer,
            },
        });
    });

    afterEach(() => {
        server.resetHandlers();
    });

    afterAll(() => server.close());

    it('should have default of 0', () => {
        render(
            <Provider store={store}>
                <DemoCounter />
            </Provider>
        );

        expect(screen.getByTestId('count-element')).toHaveTextContent('0');
    });

    it('should count increment on click', () => {
        render(
            <Provider store={store}>
                <DemoCounter />
            </Provider>
        );

        fireEvent.click(
            screen.getByRole('button', { name: 'Increment value' })
        );

        expect(screen.getByTestId('count-element')).toHaveTextContent('1');
    });

    it('should decrement on click', () => {
        render(
            <Provider store={store}>
                <DemoCounter />
            </Provider>
        );

        fireEvent.click(
            screen.getByRole('button', { name: 'Decrement value' })
        );

        expect(screen.getByTestId('count-element')).toHaveTextContent('-1');
    });

    it('should increment with length of data on Add Async button click ', async () => {
        render(
            <Provider store={store}>
                <DemoCounter />
            </Provider>
        );

        fireEvent.click(screen.getByRole('button', { name: 'Add Async' }));

        await waitFor(() => {
            expect(screen.getByTestId('count-element')).toHaveTextContent('10');
        });
    });
});
