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
  //Your code goes here … replace the below line with your code
  tot = 0;
  var a=userInput;
    for(i=1;i<=a;i++)
    {
        tot += i;
    }
console.log(tot);
  //end-here
});
