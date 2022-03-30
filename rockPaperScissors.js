function computerPlay() {
    let x = 0;
    x= Math.floor(Math.random()*6+1);
    if (x <=2) {
        return 'paper';
    } else if(x >2 && x<=4) {
        return 'rock'
    } else return 'scissors'
    }
    
    
    function playRound(playerSelection, computerSelection) {
      let playerMoveOptions = /rock|paper|scissors/i
      let x = 0;
      if(playerSelection.match(playerMoveOptions)) {
        console.log('player: ', playerSelection.toLowerCase());
        console.log('computer: ', computerSelection);
        if(playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You Win! Rock beats scissors"
        } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            return "You Lose! Rock beats scissors"
        } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            return "You Lose! Scissors beat paper"
        } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
            return "You Win! Scissors beat paper"
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You Win! Paper beats rock"
        } else if(playerSelection === 'rock' && computerSelection === 'paper') {
            return "You Lose! Paper beats rock"
        } else if(playerSelection === 'rock' && computerSelection === 'rock') {
            return "You Draw!"
        } else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
            return "You Draw!"
        } else if(playerSelection === 'paper' && computerSelection === 'paper') {
            return "You Draw!"
        }
      
      }
    }
      const playerSelection = "scissors";
      const computerSelection = computerPlay();
         console.log(playRound(playerSelection, computerSelection));