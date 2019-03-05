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
                balls:0,
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
                       <h2>Strikes: {this.state.strikes}</h2>
                       <h2>Balls: {this.state.balls}</h2>
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