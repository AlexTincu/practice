function myGreeting(message) {
  //   document.getElementById("demo").innerHTML = message;
  console.log(message);
}

// Wait 3 seconds for the greeting:
const myTimeout = setTimeout(() => myGreeting("Happy Birthday!"), 3000);

// Use clearTimeout(myTimeout) to prevent myGreeting from running:
// function myStopFunction() {
//   clearTimeout(myTimeout);
// }
