import React, {Component} from 'react';

function Dashboard(props) {
   

    


    render() {
        return (
            <div>
               <button onClick={props.hitHandler}>Strike</button>
               <button>Ball</button>
               <button>Foul</button> 
               <button>Hit</button>
            </div>
        )
    }
}




export default Dashboard;