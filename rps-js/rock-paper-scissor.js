let playerMove ='';
    let computerMover = '';
    let computer=0;
    let result = '';
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
    function ComputerMove(){
      computer = Math.floor(Math.random() * 3);
      if (computer ===0) {
        computerMover ='rock';
      }else if (computer ===1) {
        computerMover='paper';
      }else{
        computerMover='scissor'; 
      }
    }
   
    function playGame(playerMove)
    {
      ComputerMove();
      console.log(computerMover );
      console.log(playerMove);
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