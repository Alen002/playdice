hideDice(); // hide dice
scoreUser = 0;
scoreComp = 0;
countRounds = 0;

function hideDice() { // Dices are not shown on the page
    let svg = document.querySelectorAll('svg');
        svg.forEach((entries) => {
        entries.style.display = 'none';
    })
}

function compGuess() { // A random dice which the computer(= oponent of user) guesses
    compNumber = Math.round(Math.random()*5)+1;
    console.log('computer player guess is ' +compNumber);
    return compNumber;
}


function showResult() { // Create and display the random dice number
    hideDice();
    randomNumber = Math.round(Math.random()*5)+1; 
    console.log(randomNumber)
    countRounds += 1;
    document.querySelector('#gameRounds').innerHTML = countRounds;

    switch(randomNumber) {
        case 1: document.querySelector("#one").style.display= 'block';
        playerWin();
        break;
        case 2: document.querySelector("#two").style.display= 'block';
        playerWin();
        break;
        case 3: document.querySelector("#three").style.display= 'block';
        playerWin();
        break;
        case 4: document.querySelector("#four").style.display= 'block';
        playerWin();
        break;
        case 5: document.querySelector("#five").style.display= 'block';
        playerWin();
        break;
        case 6: document.querySelector("#six").style.display= 'block';
        playerWin();
        break;
    }
    
}

function playerWin() { //Check which player guesses the correct dice
    if(document.querySelectorAll('input')[0].value == randomNumber && compGuess() != randomNumber)  { // User wins
        alert('You have Won');
        scoreUser +=1;
        console.log('User score' + scoreUser);
        document.getElementById('userScore').innerHTML = scoreUser;

    } else if(document.querySelectorAll('input')[0].value != randomNumber && compGuess() == randomNumber) { // Computer wins
        alert('Computer has Won');
        scoreComp +=1;
        console.log('Computer score' + scoreComp);
        document.getElementById('compScore').innerHTML = scoreComp;
    } else if(scoreUser == 6) {
        alert('Congratulations, you have won the game...');
    } else if(scoreComp == 6) {
        alert('You have lost the game');
    }
   /*  } else if (document.querySelector('option').value) */
}

function newGame() {
    alert('A new Game has started');
    scoreUser = 0;
    scoreComp = 0;
    countRounds = 0;
    document.getElementById('compScore').innerHTML = '0';
    document.getElementById('userScore').innerHTML = '0';
    document.querySelector('#gameRounds').innerHTML = '0';
    hideDice();
}



//function validateDropdown() { //Checks whether user selects higher or lower number
//    let userSelect = document.getElementById('dropdown').value; // Higher Number
/* //    if(userSelect == '1' && document.querySelectorAll('input')[0].value > randomNumber) {
        console.log('Your guessed number is higher than dice number');
    } else if (userSelect == '0' && document.querySelectorAll('input')[0].value < randomNumber) { // Lower Number
        console.log('Your guessed number is lower than dice number');
    }
}
 */







