// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  A=userInput[0];
  B=userInput[1];
  C=A*B;
  console.log(C);
  //end-here
});
