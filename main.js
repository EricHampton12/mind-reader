var currentState = 0;
var states = ['home', 'page1', 'page2', 'page3', 'page4'];
var symbols = ['!', '@', '#', '$', '%', '^', '&'];

resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetState);
document.getElementById('resetButton').style.display = 'none';
var randomsymbols9;
nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', changeState);

function resetState() {
    currentState = 0;
    renderState();
}

function changeState() {
    currentState++;
    renderState();
}

function renderState() {

    switch(currentState) {
        case 'home':
            document.getElementById('nextButton').style.display = 'inital';
            document.getElementById('pText').innerHTML ='Pick a number between 01-99';
            document.getElementById('nextButton').innerHTML = 'Next';
            document.getElementById('resetButton').style.display = 'none';
            document.getElementById('resetButton').innerHTML = 'Reset';
            document.getElementById('smallText').innerHTML = 'When you have chosen a number, click next.';
            break;

        case 'page1':
            document.getElementById('resetButton').style.display = 'initial';
            document.getElementById('pText').innerHTML = 'Add both digits together to get a new number';
            document.getElementById('smallText').innerHTML = 'Example: 21 is 2 + 1 = 3';
            break;

        case 'page2':
            document.getElementById('pText').innerHTML = 'Subtract your new number from the original number';
            document.getElementById('smallText').innerHTML = 'Example: 21 - 3 = 18';
            break;

        case 'page3':
            document.getElementById('pText').innerHTML = '';
            randomsymbols9 = symbols9[Math.floor(Math.random() * symbols9.length)];
            for(let i = 0; i <= 99; i++) {
                if (i % 9 === 0) {
                    document.getElementById('pText').innerHTML += i + '-' + randomsybols9 + '<br';
                
                } else {
                    var symbols = [''];
                    let randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
                }
            }
                document.getElementById('smallText').innerHTML = 'Find your new number and remember the symbol beside your number.';
                document.getElementById('nextButton').innerHTML = 'Reveal';

        case 'page4':
            document.getElementById('nextButton').style.display = 'none';
            document.getElementById('pText').innerHTML = randomsybols9;
            document.getElementById('smallText').innerHTML = 'Your symbol is :<br><br>' + randomsymbols9;
            break;


        }
}
