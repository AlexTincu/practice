class NumberGame {
    constructor() {
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.score = 100;
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    checkGuess(userGuess) {
        this.attempts++;
        const difference = Math.abs(userGuess - this.secretNumber);
        this.score--;

        if (userGuess === this.secretNumber) {
            this.displayResult(`Congratulations! You guessed the number ${this.secretNumber} in ${this.attempts} attempts.`, 'success');
            this.disableInputAndButton();
            document.body.style.backgroundColor = '#7FFF7F'; // Green background
        } else {
            const hint = userGuess < this.secretNumber ? 'higher' : 'lower';
            this.displayResult(`Wrong guess! Try a ${hint} number. Attempts: ${this.attempts}`, 'danger');
            this.updateScore();
            this.updateBackgroundColor(difference);
        }
    }

    displayResult(message, style) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<div class="alert alert-${style}" role="alert">${message}</div>`;
    }

    updateScore() {
        const scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Score: ${this.score}`;
    }

    updateBackgroundColor(difference) {
        const redValue = Math.min(255, 255 - difference * 5);
        const greenValue = Math.min(255, difference * 5);
        document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, 240)`;
    }

    disableInputAndButton() {
        const userGuessInput = document.getElementById('userGuess');
        const submitButton = document.querySelector('button');
        userGuessInput.disabled = true;
        submitButton.disabled = true;
    }
}

const game = new NumberGame();

function checkGuess() {
    const userGuessInput = document.getElementById('userGuess');
    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    game.checkGuess(userGuess);
}

function restartGame() {
    location.reload();
}