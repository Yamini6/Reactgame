import React from 'react';
function ScoredBoard(props){

        return(
            <div className='scorebord-wrapper'>
                <div className='scorebord-name'>
              <h2>ROCK</h2>
              <h2>PAPER</h2>
              <h2>SCISSORS</h2></div>
              <div className='score-value-wrapper'>
            <p className='score-name'>  SCORE</p> 
            <div className='score-value'> {props.userScore} </div> 
               </div>
            </div>
        );


}
export default ScoredBoard