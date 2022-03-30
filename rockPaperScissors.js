let playerSelection = prompt('Rock, Paper or Scissors?')
let playerWin = 0;
let computerWin = 0;


function computerPlay() {
    let x = 0;
    x= Math.floor(Math.random()*6+1);
    if (x <=2) {
        return 'paper';
    } else if(x >2 && x<=4) {
        return 'rock'
    } else return 'scissors'
    }
    
    
    function playRound(playerSelection) {
      const computerSelection = computerPlay();
      let playerMoveOptions = /rock|paper|scissors/i

      if(playerSelection.match(playerMoveOptions)) {
        console.log('player: ', playerSelection.toLowerCase());
        console.log('computer: ', computerSelection);
        if(playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log("You Win! Rock beats Scissors");
            playerWin += 1;
        } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log("You Lose! Rock beats Scissors");
            computerWin += 1;
        } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log("You Lose! Scissors beat Paper");
            computerWin += 1;
        } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log("You Win! Scissors beat Paper");
            playerWin += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log("You Win! Paper beats Rock");
            playerWin += 1;
        } else if(playerSelection === 'rock' && computerSelection === 'paper') {
            console.log("You Lose! Paper beats Rock");
            computerWin += 1;
        } else if(playerSelection === 'rock' && computerSelection === 'rock') {
            console.log("You Draw!");
            playerWin += 1;
            computerWin += 1;
        } else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
            console.log("You Draw!");
            playerWin += 1;
            computerWin += 1;
        } else if(playerSelection === 'paper' && computerSelection === 'paper') {
            console.log("You Draw!");
            playerWin += 1;
            computerWin += 1;
        }
      
      }
    }

    const game = (playerSelection) => {
        let count = 5;
        while(count >0) {
            playRound(playerSelection)
            count--
            }
            if(playerWin > computerWin) {
                console.log(`You win by ${playerWin} to ${computerWin}`)
            } else {
                console.log(`The computer wins by ${computerWin} to ${playerWin}`)
            }
        }
    
     // const playerSelection = "scissors";
      console.log(game(playerSelection));