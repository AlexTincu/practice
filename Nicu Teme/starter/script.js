'use strict';

//definirea variabilelor

let numberToGuess = Math.floor(Math.random() * 20) + 1;
console.log(numberToGuess);
let numberTry = +document.querySelector('.guess').textContent;
console.log(numberTry, typeof numberTry);
let score = +document.querySelector('.score').textContent;
console.log(score, typeof score);
let theNumber = document.querySelector('.number');
let message = document.querySelector('.message').textContent;
let time = 0;
let timer;
let timeElem = document.getElementById("time").innerHTML;

let button = document.querySelector('.check');
console.log(button)


button.addEventListener('click', (check) =>{
    if (timer === undefined) {
      timer = setInterval(() => {
        time++;
        timeElem= time;
      }, 1000);
    }
    if (numberTry === 0) {
        message = 'No number';
        //console.log(message)
      } else if(numberTry === numberToGuess) {
        message = 'correct Number!';
        theNumber.textContent==numberToGuess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        console.log(message);
      }
      else if (numberTry < numberToGuess) {
       message = 'To high';
       if (score>0){
        score -=1;
       }else {message = 'You lost'}
       console.log(message);
      }
      else if (numberTry > numberToGuess) {
        displayMessage = 'To low!';
        if (score > 0) {
          score -= 1;
        } else {
          message = 'You lost';
        }
      }
      

})




