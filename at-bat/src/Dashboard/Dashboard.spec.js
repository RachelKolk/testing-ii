import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';
import Display from '../Display/Display.js';

describe('<Dashboard />', () => {
    describe('strike', () => {
        it('increases strikes', () => {
            const {getByText} = render(<Dashboard />);

            const strikeButton = getByText(/Strike/i);
            fireEvent.click(strikeButton);

            expect().toBe(1);
        })

        
    })

    describe('ball', () => {
        it('increases balls', () => {
            const {getByText} = render(<Display />);

            const ballButton = getByText(/ball/i);
            fireEvent.click(ballButton);

            expect(ball).toBe(1);
        })
    })
})