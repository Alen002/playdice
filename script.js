
 
function hideDice() {
    document.querySelectorAll("svg")[0].style.display='none'
    document.querySelectorAll("svg")[1].style.display= 'none';
    document.querySelectorAll("svg")[2].style.display= 'none';
}

hideDice();
 
let randomNumber = Math.round(Math.random()*2)+1;

console.log(randomNumber)

showResult(randomNumber);

// Show respective dice
function showResult(input) {

    switch(input) {
        case 1: document.querySelector("#one").style.display= 'block';
        break;
        case 2: document.querySelector("#two").style.display= 'block';
        break;
        case 3: document.querySelector("#three").style.display= 'block';
        break;
    }
}












