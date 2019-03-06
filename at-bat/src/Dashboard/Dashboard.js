import React, {Component} from 'react';

function Dashboard(props) {
   
        
        return (
            <div>
               <button data-testid='strike-button' onClick={props.strikeHandler}>Strike!</button>
               <button data-testid='ball-button' onClick={props.ballHandler}>Ball</button>
               <button data-testid='foul-button' onClick={props.foulHandler}>Foul</button> 
               <button data-testid='hit-button' onClick={props.hitHandler}>Hit</button>
            </div>
        );
    }





export default Dashboard;