import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';
import Display from '../Display/Display.js';

describe('<Dashboard />', () => {
    describe('buttons', () => {
        it('has a strike button', () => {
            const {getByText} = render(<Dashboard />);

            const strikeButton = getByText(/strike/i);

            expect(strikeButton).toBeInTheDocument();
        });

        
    

   
        it('has a ball button', () => {
            const {getByText} = render(<Dashboard/>);

            const ballButton = getByText(/ball/i);
            

            expect(ballButton).toBeInTheDocument();
        });
   

    
        it('has a foul button', () => {
            const {getByText} = render(<Dashboard/>);

            const foulButton = getByText(/foul/i);
            

            expect(foulButton).toBeInTheDocument();
        });

        it('has a hit button', () => {
            const {getByText} = render(<Dashboard />);

            const hitButton = getByText(/hit/i);

            expect(hitButton).toBeInTheDocument();
        });
    });

    describe('strike', () => {
        it('increases strikes by one when clicked', () => {
            const {getByText} = render(<Display />);
            const strikeHandler = getByText(/strikes:/i);


            const strikeButton = getByText(/strike/i);
            fireEvent.click(strikeButton);

            expect(strikeHandler).toEqual(1);
        })
        
    })
    
});