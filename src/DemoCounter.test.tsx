import { render, screen } from '@testing-library/react';
import { DemoCounter } from './DemoCounter';
describe('render DemoCounter', () => {
    it('should render all elements', () => {
        render(<DemoCounter />);

        expect(screen.getByText('DemoCounter')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(2);
    });
});
