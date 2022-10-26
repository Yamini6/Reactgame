import react from 'react';
import './GameBoard.scss'
import rocks from '../../images/icon-rock.svg';
import scissors from '../../images/icon-scissors.svg';
import paper from '../../images/icon-paper.svg';
import triangleImg from '../../images/bg-triangle.svg'
import ScoredBoard from '../ScoreBoard';
import Modal from '../FooterPage';

class GameBoard extends react.Component{
    constructor(props){
        super(props);
        this.state={
   userchoice: "",
   housechoice: "",
   initialstate:true,
   userScore: 0,
   viewRules:false
        }
    }

    render() { 
        const choicelistarr = [
            "Rock",
            "Paper",
            "scissor",
          ];
         const getRandomChoice = () => {
            return choicelistarr[Math.floor(Math.random() * choicelistarr.length)];
          };

          const handleRule=() => {
               this.setState({
                viewRules: !this.state.viewRules
               })
          }
          const handleTryAgain=() => {
             this.setState({
                initialstate: true,
                housechoice:""
             })
          }
      
          const handleChoice=(data) => {
            this.setState({
              userchoice: data,
              initialstate: false,
              finalResults:""
            })  
            setTimeout(() => {
              this.setState({
                  housechoice: getRandomChoice()
              }, () => {
                const finalResults= getResult();
                this.setState({
                    finalResults
                })
                if(finalResults==="YOU WIN")
            {
             this.setState({
                 userScore: this.state.userScore+1
             })
            }
            else if(finalResults==="YOU LOSE"){
             this.setState({
                 userScore: this.state.userScore-1
             })
            }
            },()=>{
            })
            }, 1000);
    
          }
          const getResult=()=>{
            let housewinner="YOU LOSE";
            let userwinner="YOU WIN";
            let Draw="DRAW";
            const {housechoice,userchoice}= this.state;
            if(userchoice==="Rock" &&  housechoice==="Paper")
            return housewinner 
          else if(userchoice==="Paper" &&  housechoice==="scissor")
          return housewinner 
          else if(userchoice==="scissor" &&  housechoice==="Rock")
          return housewinner 
          else if(userchoice==="Rock" &&  housechoice==="Rock")
          return Draw 
          else if(userchoice==="Paper" &&  housechoice==="Paper")
          return Draw 
         else if(userchoice==="scissor" &&  housechoice==="scissor")
          return Draw
          else if(userchoice==="Paper" &&  housechoice==="Rock")
          return userwinner 
         else if(userchoice==="scissor" &&  housechoice==="Paper")
          return userwinner 
         else if(userchoice==="Rock" &&  housechoice==="scissor")
          return userwinner  
          }
        return(
            <div className='Gameboard-wrapper'>
                <ScoredBoard userScore={this.state.userScore}></ScoredBoard>
             { this.state.initialstate &&   <div className='game-choice-list'>
              <img className='triangle-img' alt="triangle" src={triangleImg}></img>
              <div className='icon-wrapper'>
                    <button className='rock-btn' onClick={()=>handleChoice("Rock")}>   <img className='rock-img' alt="rock" src={rocks}></img>
                    </button>
                    <button className='paper-btn' onClick={()=>handleChoice("Paper")}>   <img className='paper-img' alt="paper" src={paper}></img>
                     </button>
                    <button className='scissor-btn' onClick={()=>handleChoice("scissor")}>   <img className='scissors-img' alt="scissor" src={scissors}></img>
                     </button>
                     </div>
                </div>}
               {!this.state.initialstate && <div className='game-board-main'>
             <div className='game-user-container'>
              <div>
              <h1> you picked</h1></div>
              <div className={`user-choice  ${ this.state.userchoice==="Rock"?"Rock-div":""} 
               ${ this.state.userchoice==="Paper"?"Paper-div":""}  ${ this.state.userchoice==="scissor"?"scissor-div":""} 
              ${this.state.finalResults==="YOU WIN" ? "winner-class" : ""}`}>
             { this.state.userchoice==="Rock" && <img className='rock-img' alt="rock" src={rocks}></img>}
             {this.state.userchoice==="Paper" &&  <img className='paper-img' alt="paper" src={paper}></img>}
             {this.state.userchoice==="scissor" &&  <img className='scissors-img'  alt="scissor" src={scissors}></img>}</div>
                 
             </div>
             {this.state.finalResults && <div className='score-bord-wrapper'>

<div className='score-result'>{this.state.finalResults}</div>
<button onClick={handleTryAgain}> TRY AGAIN</button>
</div>}
             <div className={`game-computer-container `}>
   <h1> house picked </h1>
  {   this.state.housechoice==="Rock" && <div className={`house-choice  ${ this.state.housechoice==="Rock"?"Rock-div":""} 
  ${this.state.finalResults==="YOU LOSE" ? "winner-class" : ""}`}>
   <img className='rock-img'  alt="rock" src={rocks}></img>
             </div>}
             {this.state.housechoice==="Paper" && <div className={`house-choice  ${ this.state.housechoice==="Paper"?"Paper-div":""} ${this.state.finalResults==="YOU LOSE" ? "winner-class" : ""}`}>
              <img className='paper-img' alt="paper" src={paper}></img>
             </div>}
             {this.state.housechoice==="scissor" &&  <div className={`house-choice   ${ this.state.housechoice==="scissor"?"scissor-div":""} 
             ${this.state.finalResults==="YOU LOSE" ? "winner-class" : ""}`}>
             <img className='scissors-img'  alt="scissor" src={scissors}></img>
             </div>}
             </div>
             </div>}
             <div className='footer-wraper'>
              <button className='footer' onClick={handleRule}>RULES</button>
              { this.state.viewRules && <Modal toggle={handleRule}></Modal>}
             </div>
             {/* { this.state.viewRules && <div className='rules-img-div'><img className='rules-img' src={rulesImg}></img></div>} */}
          

            </div>
            
        )
    }
} 
export default GameBoard;