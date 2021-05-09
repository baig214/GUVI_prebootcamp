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
  var sum=0;

  for(i=0;i<2;i++)
  {
      sum=sum+ +userInput[i];  }
  console.log(sum);

  //end-here
});
