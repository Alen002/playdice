hideDice(); // hide dice
score = 0;

function hideDice() { // Dices are not shown on the page
    let svg = document.querySelectorAll('svg');
        svg.forEach((entries) => {
        entries.style.display = 'none';
    })
}

function showResult() { // Create and display the random dice number
    hideDice();
    randomNumber = Math.round(Math.random()*5)+1; 
    console.log(randomNumber)
    validateDropdown();
    
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

function playerWin() {
    if(document.querySelectorAll('input')[0].value == randomNumber) {
        alert('You have Won');
        score +=1;
        console.log('score' + score)
    }
   /*  } else if (document.querySelector('option').value) */
}


function validateDropdown() { //Checks whether user selects higher or lower number
    let userSelect = document.getElementById('dropdown').value;
    if(userSelect == '1') {
        alert('Higher Number Selected');
    } else if (userSelect == '0') {
        alert('Lower Number Selected');
    }
}








