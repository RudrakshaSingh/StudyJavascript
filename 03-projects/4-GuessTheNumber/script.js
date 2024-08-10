//CAN GIVE ZERO
let randomNumber = parseInt(Math.random() * 100 + 1); //NOT IN DECIMAL PARSE INT

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number");
    } else if (guess < 1) {
        alert("please enter a number greater than 1");
    } else if (guess > 100) {
        alert("please enter a number less than 100");
    } else {
        prevGuess.push(guess);

        //game over
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("you guessed it right");
    } else if (guess < randomNumber) {
        displayMessage("number is too low");
    } else if (guess > randomNumber) {
        displayMessage("number is too high");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", ""); //always take in key value pair so give empyty for tag
    p.classList.add("button"); //adds class to p
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;

    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(guess) {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e) {
        randomNumber = randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
    });
}
