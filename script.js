hideDice(); // hide dice


function hideDice() { // Dices are not shown on the page
    document.querySelectorAll("svg")[0].style.display='none'
    document.querySelectorAll("svg")[1].style.display= 'none';
    document.querySelectorAll("svg")[2].style.display= 'none';
    document.querySelectorAll("svg")[3].style.display= 'none';
    document.querySelectorAll("svg")[4].style.display= 'none';
    document.querySelectorAll("svg")[5].style.display= 'none';
}

function showResult() { // Create and display the random dice number
    hideDice();
    randomNumber = Math.round(Math.random()*5)+1; 
    console.log(randomNumber)
    
    switch(randomNumber) {
        case 1: document.querySelector("#one").style.display= 'block';
        break;
        case 2: document.querySelector("#two").style.display= 'block';
        break;
        case 3: document.querySelector("#three").style.display= 'block';
        break;
        case 4: document.querySelector("#four").style.display= 'block';
        break;
        case 5: document.querySelector("#five").style.display= 'block';
        break;
        case 6: document.querySelector("#six").style.display= 'block';
        break;
    }
    
}












