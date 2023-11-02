let counter = 0;

function incrementCounter() {
  counter++;
  console.log("Counter:", counter);

  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Intervalul a fost oprit.");
  }
}

const intervalId = setInterval(incrementCounter, 1000);
