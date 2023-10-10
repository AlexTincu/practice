// throw new Error('O eroare anume');

let file = "./test.txt";

function logError(content) {
  const fs = require("fs");

  fs.writeFile(file, content + "\n", { flag: "a+" }, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

try {
  // some code
  throw new Error("O eroare anume");
} catch ( error) {
  console.log(error.message);
  //   logError(error.message);
} finally {
    console.log("finally");
}
