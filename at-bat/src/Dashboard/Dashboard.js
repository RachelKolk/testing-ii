import React, {Component} from 'react';

function Dashboard(props) {
   
        
        return (
            <div>
               <button onClick={props.strikeHandler}>Strike</button>
               <button onClick={props.ballHandler}>Ball</button>
               <button onClick={props.foulHandler}>Foul</button> 
               <button onClick={props.hitHandler}>Hit</button>
            </div>
        );
    }





export default Dashboard;