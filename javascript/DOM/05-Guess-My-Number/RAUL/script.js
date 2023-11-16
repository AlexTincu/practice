"use strict";

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max + 1); // max included
}

function startTimer() {
  // Porneste timer daca nu este deja pornit
  if (timer === undefined) {
    timer = setInterval(() => {
      time++;
      timeElem.innerHTML = time;
    }, 1000);
  }
}

let highscore = 0;
let score = 20;
let time = 0;
let timer;

const buttonCheckElem = document.getElementById("buttonCheck");
const messageElem = document.querySelector(".message");
const timeElem = document.querySelector("#time");
const checkElem = document.querySelector("#check");
const scoreElem = document.querySelector(".score");
const highscoreElem = document.querySelector(".highscore");
const againElem = document.querySelector(".again");
// am adaugat prefixul Elem ca sa stiu mai jos ca e vorba despre un element html si l-am facut const pt ca 
// nu se schimba. Pentru valoarea din el care e de fiecare data alta, folosesc o alta variabila, let
const yourNumberElem = document.getElementById("number");
let myNumber; // myNumber este numar deci nu am ce converti la el cu "+"

function check() {
  // acum nu mai e nevoie de filtrare
  // si daca ar fi fost, e indeajuns sa facem verificarea dupa o singura clasa (check) sau daca 
  // clasa e ceva comun, folosita si pe alte elemente, atunci punem un id in html si filtram dupa el.
  // e.target.id === "myId"
  // Daca nu se da click pe Check! -> return
  // if (
  //   !(
  //     e.target.classList.contains("btn") && e.target.classList.contains("check")
  //   )
  // )
  //   return;

  let yourNumber = +yourNumberElem.value;

  if (yourNumber === 0) {
    messageElem.textContent = "⛔️No number!";
    return;
  }

  startTimer();

  if (yourNumber < myNumber) {
    messageElem.textContent = "📉Too Low...";
    if (score > 0) {
      score -= 1;
      scoreElem.textContent = score;
    }
  }

  if (yourNumber > myNumber) {
    messageElem.textContent = "📈Too High...";
    if (score > 0) {
      score -= 1;
      scoreElem.textContent = score;
    }
  }

  if (yourNumber === myNumber) {
    document.body.style.backgroundColor = "#60B347";
    messageElem.textContent = "🎉 Correct Number!";
    checkElem.textContent = yourNumber;
    yourNumberElem.setAttribute("disabled", "");
    clearInterval(timer);
    if (score > highscore) {
      highscoreElem.textContent = score;
      highscore = score;
    }
  }
}

function reset() {
  myNumber = generateRandomNumber(20);
  console.log(`My number: ${myNumber}.`);

  score = 20;
  time = 0;
  timer = undefined;

  scoreElem.textContent = score;
  timeElem.innerHTML = time;
  messageElem.textContent = "Start guessing...";
  checkElem.textContent = "?";

  yourNumberElem.removeAttribute("disabled");
  document.body.style.backgroundColor = "#222";
}

// am un singur buton pe care il "ascult", daca aveam mai multe butoane, 
// ca sa nu am mai multe addEventListener(), as fi pus pe elementul parinte si as fi filtrat 
// doar dupa clickurile pe acele butoane care ma intereseaza
buttonCheckElem.addEventListener("click", check);

againElem.addEventListener("click", reset);

reset();