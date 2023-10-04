let result='';
let computerMover ='';
let playerMove='';
    let Score =JSON.parse(localStorage.getItem('score')) || 
    {
      win:0,
      lose:0,
      tie:0
    };
    /*
    if (!Score) 
    {
      Score = {
        win:0,
        lose:0,
        tie:0
      }
    }*/
    document.querySelector('.auto-play-button').addEventListener
    ('click',()=>{
      autoPlay();
    });
    function playerMoveSelector(){
      let player = Math.floor(Math.random() * 3);
      if (player ===0) {
        playerMove ='rock';
      }else if (player ===1) {
        playerMove='paper';
      }else{
        playerMove='scissor'; 
      }
      return playerMove;
    } 
    let isAutoPlaying = false;
    let intervalId; 
    function autoPlay(){
     if(!isAutoPlaying){
       intervalId =  setInterval(()=>{
        let playerMove= playerMoveSelector();
       playGame(playerMove);
     },1000);
     isAutoPlaying = true;
     }else{
      clearInterval(intervalId);
      isAutoPlaying=false;
     }
      console.log(isAutoPlaying);
      
    }
      
    function ComputerMove(){
      const computer = Math.floor(Math.random() * 3);
      
      if (computer ===0) {
        computerMover ='rock';
        
      }else if (computer ===1) {
        computerMover='paper';
        
      }else{
        computerMover='scissor'; 
       
      }

    }
    document.querySelector('.js-rock-button')
    .addEventListener('click',()=>{
      playGame('rock');
    });
    document.querySelector('.js-paper-button')
    .addEventListener('click',()=>{
      playGame('paper');
    });
    document.querySelector('.js-scissor-button')
    .addEventListener('click',()=>{
      playGame('scissor');
    });

    document.body.addEventListener('keydown',(event)=>{
      if(event.key === 'r' || event.key ==='R')
      {
        playGame('rock');
      }else if (event.key === 'p' || event.key ==='P') {
        playGame('paper');
      }else if (event.key ==='s' || event.key ==='S'){
        playGame('scissor');
      }
      console.log(event.key);
    });

    function playGame(playerMove)
    { 
      ComputerMove();
      
      console.log(`computer ${computerMover}`);
      console.log(`player ${playerMove}`);
      if(playerMove === 'rock')
      {
              
            if (computerMover ==='rock') {
              Score.tie++
              result='Tie';
            }else if (computerMover==='paper') {
              Score.lose++;
              result='You Lose';
            }else{
              Score.win++;
              result='You Win';
            }
            
            //alert(`Senin Seçimin  ${playerMove} Bilgisayarin Seçtiği ${computerMover} ${result}.\n Win : ${Score.win} Tie : ${Score.tie} Lose : ${Score.lose}`);
            

      }
      if(playerMove==='paper')
      {
              
            if (computerMover ==='rock') {
              Score.win++
              result='You Win';
            }else if (computerMover==='paper') {
              Score.tie++;
              result='Tie';
            }else{
              Score.lose++;
              result='You Lose';
            }
            //alert(`Senin Seçimin  ${playerMove} Bilgisayarin Seçtiği ${computerMover} ${result}.\n Win : ${Score.win} Tie : ${Score.tie} Lose : ${Score.lose}`);   
      }
      if (playerMove==='scissor') 
      {
            
          if (computerMover ==='rock') {
            Score.lose++
            result='You Lose';
          }else if (computerMover==='paper') {
            Score.win++;
            result='You Win';
          }else{
            Score.tie++;
            result='Tie';
          }
          //alert(`Senin Seçimin  ${playerMove} Bilgisayarin Seçtiği ${computerMover} ${result}.\n Win : ${Score.win} Tie : ${Score.tie} Lose : ${Score.lose}`);
      }
      localStorage.setItem('score', JSON.stringify(Score));
     
      resultPrint();
      resultMove(playerMove);
      ScoreBoard();

    }
    document.querySelector('.js-reset-button').addEventListener
    ('click',()=>{
      ResetScore();
    });
    function ResetScore(){
        Score.tie=0;
         Score.win=0;
         Score.lose=0;
         localStorage.removeItem('score')
       //alert(`Win : ${Score.win} Tie : ${Score.tie} Lose : ${Score.lose} All Reset.`)
        ScoreBoard();
        
    }
    function ScoreBoard(){
      document.querySelector('.score-board').innerHTML = `Wins : ${Score.win} Ties : ${Score.tie} Losses : ${Score.lose}`
    }
 function resultPrint(){
  document.querySelector('.js-result').innerHTML = result;
 }
 function resultMove(playerMove){
  
  const movesElement=document.querySelector('.js-moves') 
  movesElement.innerHTML=
  `You <img class="${playerMove}-emoji" src="emoji/${playerMove}-emoji.png">   <img class="${computerMover}-emoji" src="emoji/${computerMover}-emoji.png"> Bilgisayar`;
 }