var currentState = 0;
var states = ["home", "pick", "add numbers", "subtract numbers", "symbol", "final"];
var insertSymbols = [ '!', '@', '#', '$', '%', '^', '&', '*', '{', '_', '+', '=', '>', '<'];
var insertNumbers = [];
var bT = document.querySelector('bigtext');
var next = document.getElementById('next');
var sT = document.querySelector('#smalltext');
var r = document.getElementById('reset');


//add click listener to button for function to run

reset.addEventListener('click', resetState());


// putting click listener to "next" 

next.addEventListener('click', changeState(renderState));


var myState = states[currentState];
console.log(currentState); 

function currentState() {
    currentState = 0;
    renderState();
}

function changeState() {
    currentState++;
    renderState(+1);
}

console.log(states[currentState]);
function renderState() {

    switch(states[currentState]) {

        case "home":
            bigtext.textContent = "I can read your mind";
            next.style.visibility = 'visible';
            r.textContent = "GO";
            break;


        case "pick":
            bigtext.textContent = "Pick a number between 01-99";
            next.style.visibility = 'visible';
            next.textContent = "Next";
            sT.textContent = "When you have picked your number hit 'Next'";
            r.textContent = "Reset";
            break;


        case "add numbers":
            bigtext.textContent = "Add both digits together to get a new number";
            next.style.visibility = 'visible';
            next.textContent = "Next";
            sT.textContent = "Ex: 26, 2 + 6 = 8";
            r.textContent = "Reset";
            break;

        
        case "subtract numbers":
            bigtext.textContent = "Now subtract your new number from the original number";
            next.style.visibility = 'visible';
            next.textContent = "Next";
            sT.textContent = "Ex: 26 - 8 = 14<brk>";
            r.textContent = "Reset";
            break;



        case "symbol":
            bigtext.textContent = "Random Content";
            next.style.visibility = 'visible';
            next.textContent = "Reveal";
            sT.textContent = "Find your new number<br> Take note of the symbol beside your number";
            r.textContent = "Reset";


        case "final":
            bigtext.textContent = "Your symbol goes here";
            next.style.visibility = 'hidden';
            sT.textContent = "Your symbol is:"
            r.textContent = "Reset";
    }
}