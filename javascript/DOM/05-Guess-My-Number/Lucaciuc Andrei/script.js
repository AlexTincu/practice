class NumberGame {
    constructor() {
        this.limit = 100;
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.score = 100;
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * this.limit) + 1;
    }

    checkGuess(userGuess) {
        if (isNaN(userGuess) || userGuess < 1 || userGuess > this.limit) {
            this.displayResult(`Please enter a valid number between 1 and ${this.limit}.`, 'danger');
            return;
        }

        this.attempts++;

        if (userGuess === this.secretNumber) {
            this.displayResult(`Congratulations! You guessed the number ${this.secretNumber} in ${this.attempts} attempts.`, 'success');
            this.disableInputAndButton();
            document.body.style.backgroundColor = '#7FFF7F'; // Green background
        } else {
            this.score--;
            const difference = Math.abs(userGuess - this.secretNumber);

            const hint = userGuess < this.secretNumber ? 'higher' : 'lower';
            this.displayResult(`Wrong guess! <br/> Try a ${hint} number. Attempts: ${this.attempts}`, 'danger');
            this.updateScore();
            this.updateBackgroundColor(difference);
        }
    }

    displayResult(message, style) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<div class="alert alert-${style}" role="alert">${message}</div>`;
    }

    updateScore() {
        // poate fi scris intr-o singura linie mai simplu
        document.getElementById('score').textContent = `Score: ${this.score}`;
    }

    /**
     * Idea este interesanta, dar, eu cel putin nu am o solutie la ea, pentru ca:
     * 
     * Nu se poate face o tranzitie de la rosu la verde astfel incat sa aiba si sens, pentru ca 
     * intre rosu si verde nu e o diferenta liniara in functia rgb
     * tot ce se poate face este o tranzitie de la verde inchis la verde deschis. 
     * oricum per total experienta userului nu e placuta, si idea jocului nu e sa-ti spuna cat de departe sau aproape esti
     * 
     * @param {*} difference 
     */
    updateBackgroundColor(difference) {
        // diferenta intre numere este intre 1 si this.limit (care a devenit dinamic asa cum se fac lucrurile)
        // diferenta intre culori este intre 1 si 255
        // deci parametrul care ma intereseaza este difference transformat din baza this.limit in baza 255
        const difference255 = Math.floor(difference * 255 / this.limit);
        const greenValue = 255 - difference255;

        document.body.style.backgroundColor = `rgb(0, ${greenValue}, 0)`;
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

    game.checkGuess(userGuess);
}

function restartGame() {
    location.reload();
}