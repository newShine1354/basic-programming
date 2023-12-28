// const prompt = require("prompt-sync")()
let systemMove;
let numMoves;
j = 0;
k = 0;
while(true) {
    numMoves = Math.floor(Math.random() * 3) + 1;
    if (numMoves === 1) {
        systemMove = 'S'
    } else if (numMoves === 2) {
        systemMove = 'W'
    } else {
        systemMove = 'G'
    }
    let userMove = prompt("Enter S for Snake, W for Water and G for Gun:\n")
    userMove = userMove.toUpperCase();
    
    if (userMove!= "W" && userMove!= "S" && userMove!= "G") {
        console.error("Enter valid Input.");
        break;
    }

    if (userMove === systemMove) {
        console.log(`Draw!\nYou entered ${userMove} and system's move is ${systemMove}`);
    } else if ((userMove === 'S' && systemMove == 'W') || (userMove === 'W' && systemMove == 'G') || (userMove === 'G' && systemMove == 'S')) {
        console.log(`You Win!\nYou entered ${userMove} and system's move is ${systemMove}`);
        j++;
    }
    else {
        console.log(`You Lose!\nYou entered ${userMove} and system's move is ${systemMove}`);
        k++;
    }
    console.log(`Your Scores are ${j} and system's score are ${k}`);
    if (j === 3 || k === 3) {
        break;
    }
}
alert(j === 3 ? 'You Win' : 'You Lose');
