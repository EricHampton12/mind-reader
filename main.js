var currentState = 0;
var states = ['home', 'page1', 'page2', 'page3', 'page4', 'page5'];
var symbols9 = ["!", "@", "#", "$", "%", "&", "&"];
var smallText = document.querySelector('.Example');
var pText = document.getElementById('pText');
var smallText = document.getElementById('smallText');
var randomsymbols9;
var nextBtn = document.getElementById('nextButton');
var resetBtn = document.getElementById('resetButton');
nextButton.addEventListener('click', changeState);
resetButton.addEventListener('click', resetState);

function resetState() {
    currentState = 0;
    renderState();
}

function changeState() {
    currentState++;
    renderState();
}

console.log(states[currentState]);


function renderState() {

    switch (states[currentState]) {

        case 'home': 
            pText.textContent = "I can read your mind";
            smallText.textContent = "Press next to continue";
            resetBtn.style.visibility = 'hidden';
            break;

        case 'page1': 
            pText.textContent = "Pick a number between 01-99";
            smallText.textContent = "When you have picked your number, click next";
            break;

        case 'page2':
            pText.textContent = "Add both digits together to get a new number";
            smallText.textContent = "Ex: 14 is 1 + 4 = 5";
            break;

        case 'page3':
            pText.textContent = "Subtract your new number from the original number";
            smallText.textContent = "Ex: 14 - 5 = 9";
            break;
        
        case 'page4':
            pText.innerHTML = " ";
            randomsymbols9 = symbols9[Math.floor(Math.random()* symbols9.length)];
            for (var i = 0 ;i < 100; i++) {
                if (i % 9 == 0) {
                    pText.innerHTML += i + " - " + randomsymbols9 + "<br>";
                }
                else  {
                    let symbols = ['@', '&', '%', '*'];
                    let randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
                    var char = String.fromCharCode(Math.floor(Math.random() * 10) + 36);
                    pText.innerHTML += i + " = " + char + "<br>";
            }
        }
            nextBtn.style.visibility = "visible";
            smallText.innerHTML = "Find your new number";
            break;
        case 'page5':
            pText.innerHTML = randomsymbols9;
            smallText.innerHTML = "Your symbol is :<br><br>" + randomsymbols9;
            resetBtn.style.visibility = "visible";
            nextBtn.style.visibility = "invisible";
        break;
    }
}

