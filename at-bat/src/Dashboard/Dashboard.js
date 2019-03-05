import React, {Component} from 'react';

class Dashboard extends Component {
   

    strike = () => {
        this.props.strike = this.props.strike + 1;
    }


    render() {
        return (
            <div>
               <button onClick={this.strike}>Strike</button>
               <button>Ball</button>
               <button>Foul</button> 
               <button>Hit</button>
            </div>
        )
    }
}




export default Dashboard;