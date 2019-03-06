import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard/Dashboard.js';
import Display from './Display/Display.js';

afterEach(cleanup);

describe('<App />', () => {
  
 

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

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

  });

  describe('<Display />', () => {

      describe('strike', () => {
          it('increases strikes by one when clicked', () => {
              const {getByTestId} = render(<App />);

              const strikeButton = getByTestId(/strike-button/i);
              expect(strikeButton).toHaveTextContent('Strike!');
              fireEvent.click(strikeButton);
              
              const strikesDisplay = getByTestId('s-display');
              expect(strikesDisplay).toHaveTextContent('1');

              
          });

          it('increases strikes by two when clicked twice', () => {
            const {getByTestId} = render(<App />);

            const strikeButton = getByTestId(/strike-button/i);
           
            fireEvent.click(strikeButton);
            fireEvent.click(strikeButton);
            
            const strikesDisplay = getByTestId('s-display');
            expect(strikesDisplay).toHaveTextContent('2');

            
          });

          it('reset strikes after 3 clicks', () => {
            const {getByTestId} = render(<App />);

            const strikeButton = getByTestId(/strike-button/i);
           
            fireEvent.click(strikeButton);
            fireEvent.click(strikeButton);
            fireEvent.click(strikeButton);
            
            
            const strikesDisplay = getByTestId('s-display');
            expect(strikesDisplay).toHaveTextContent('0');

            
          });
          
      });

      describe('balls', () => {
        it('increases the balls count by 1 when clicked', () => {
          const {getByTestId} = render(<App />);

          const ballButton = getByTestId(/ball-button/i);
          
          fireEvent.click(ballButton);
          
          const ballsDisplay = getByTestId('b-display');
          expect(ballsDisplay).toHaveTextContent('1');

        });

        it('increases the balls count by 2 when clicked 2', () => {
          const {getByTestId} = render(<App />);

          const ballButton = getByTestId(/ball-button/i);
          
          fireEvent.click(ballButton);
          fireEvent.click(ballButton);
          
          const ballsDisplay = getByTestId('b-display');
          expect(ballsDisplay).toHaveTextContent('2');

        });

        it('reset the balls count after 4 clicks', () => {
          const {getByTestId} = render(<App />);

          const ballButton = getByTestId(/ball-button/i);
          
          fireEvent.click(ballButton);
          fireEvent.click(ballButton);
          fireEvent.click(ballButton);
          fireEvent.click(ballButton);
          
          const ballsDisplay = getByTestId('b-display');
          expect(ballsDisplay).toHaveTextContent('0');

        });


      });

      describe('foul', () => {
        it('increases strikes by one when clicked', () => {
          const {getByTestId} = render(<App />);

          const foulButton = getByTestId(/foul-button/i);
          
          fireEvent.click(foulButton);
          
          const strikesDisplay = getByTestId('s-display');
          expect(strikesDisplay).toHaveTextContent('1');

          
        });

        it('increases strikes by one up to 2 and then does nothing to strike count', () => {
          const {getByTestId} = render(<App />);

          const foulButton = getByTestId(/foul-button/i);
          
          fireEvent.click(foulButton);
          fireEvent.click(foulButton);
          fireEvent.click(foulButton);
          
          const strikesDisplay = getByTestId('s-display');
          expect(strikesDisplay).toHaveTextContent('2');

          
        });
      
      });

      describe('hit', () => {
        it('resets the ball and strikes counters to zero', () => {
          const {getByTestId} = render(<App />);

          const ballButton = getByTestId(/ball-button/i);
          const strikeButton = getByTestId(/strike-button/i);
          
          fireEvent.click(ballButton);
          fireEvent.click(strikeButton);
          
          
          const strikesDisplay = getByTestId('s-display');
          expect(strikesDisplay).toHaveTextContent('1');

          const ballsDisplay = getByTestId('b-display');
          expect(ballsDisplay).toHaveTextContent('1');

          const hitButton = getByTestId(/hit-button/i);

          fireEvent.click(hitButton);

          expect(strikesDisplay).toHaveTextContent('0');          
          expect(ballsDisplay).toHaveTextContent('0');
        })
      })
  
  });

});
