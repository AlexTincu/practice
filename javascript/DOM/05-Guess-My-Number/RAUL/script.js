"use strict";

let myNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
console.log(`My number: ${myNumber}.`);
const mainElem = document.querySelector("main");
const messageElem = document.querySelector(".message");
const timeElem = document.querySelector("#time");
const checkElem = document.querySelector("#check");
const scoreElem = document.querySelector(".score");
const highScoreElem = document.querySelector(".highscore");
const againElem = document.querySelector("header");
let yourNumber = document.getElementById("number");

let score = +scoreElem.textContent;
let highscore = 0;
let time = 0;
let timer;

mainElem.addEventListener("click", check);

function check(e) {
  // Daca nu se da click pe Check! -> return
  if (
    !(
      e.target.classList.contains("btn") && e.target.classList.contains("check")
    )
  )
    return;
  
    // Porneste timer daca nu este deja pornit
  if (timer === undefined) {
    timer = setInterval(() => {
      time++;
      timeElem.innerHTML = time;
    }, 1000);
  }

  yourNumber = document.getElementById("number");

  if (+yourNumber.value === 0) messageElem.textContent = "⛔️No number!";
  if (+yourNumber.value < +myNumber && +yourNumber.value !== 0) {
    messageElem.textContent = "📉Too Low...";
    if (score > 0) {
      score -= 1;
      scoreElem.textContent = score;
    }
  }
  if (+yourNumber.value > +myNumber) {
    messageElem.textContent = "📈Too High...";
    if (score > 0) {
      score -= 1;
      scoreElem.textContent = score;
    }
  }
  if (+yourNumber.value === +myNumber) {
    document.body.style.backgroundColor = "#60B347";
    messageElem.textContent = "🎉 Correct Number!";
    checkElem.textContent = yourNumber.value;
    yourNumber.setAttribute("disabled", "");
    clearInterval(timer);
    if (score > highscore) {
      highScoreElem.textContent = score;
      highscore = score;
    }
  }
}

againElem.addEventListener("click", reset);

function reset(e) {
  if (
    !(
      e.target.classList.contains("btn") && e.target.classList.contains("again")
    )
  )
    return;
  yourNumber.removeAttribute("disabled", "");
  document.body.style.backgroundColor = "#222";
  checkElem.textContent = "?";
  myNumber = Math.floor(Math.random() * (21 - 1 + 1)) + 1;
  console.log(`My number: ${myNumber}.`);
  score = 20;
  scoreElem.textContent = 20;
  timeElem.innerHTML = 0;
  time = 0;
  timer = undefined;
  messageElem.textContent = "Start guessing...";
}