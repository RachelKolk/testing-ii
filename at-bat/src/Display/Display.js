import React, {Component} from 'react';

import Dashboard from '../Dashboard/Dashboard.js';

class Display extends Component {
    state = {
        strikes: 0,
        balls: 0,
    };

    hitHandler = () => {
        this.setState({
            balls: 0,
            strikes: 0
        });
        
    };

    strikeHandler = () => {
        if (this.state.strikes < 2) {
            this.setState({
                ...this.state,
                strikes: this.state.strikes + 1
            });
        } else {
            this.setState({
                balls: 0,
                strikes: 0
            });
        }
    };

    foulHandler = () => {
        if(this.state.strikes < 2) {
            this.setState({
                ...this.state,
                strikes: this.state.strikes + 1
            });
        } else {
            this.setState({
                ...this.state   
            });
        }
    };

    ballHandler = () => {
        if (this.state.balls < 3) {
            this.setState({
                ...this.state,
                balls: this.state.balls + 1
            });
        } else {
            this.setState({
                balls: 0,
                strikes: 0
            });
        }
    };
        
        render() {
            return (
               <div>
                   <h2>Baseball Scoreboard</h2>

                   <div>
                       <h2>Strikes: </h2>
                       <span data-testid="s-display">{this.state.strikes}</span>
                       <h2>Balls: </h2>
                       <span data-testid="b-display">{this.state.balls}</span>
                   </div>

                   <Dashboard  
                     hitHandler={this.hitHandler}
                     strikeHandler={this.strikeHandler}
                     foulHandler={this.foulHandler}
                     ballHandler={this.ballHandler}
                   />
               </div> 
            );
        }
    
    
}

export default Display