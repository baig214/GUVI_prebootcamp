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
  //Your code goes here … replace the below line with your code logic
  var a=Math.pow(userInput,2);
var b=Math.sqrt(3)/4;
c=a*b;
console.log(c.toFixed(2));


  //end-here
});
