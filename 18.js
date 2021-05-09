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
 var r=userInput;
 var cir = 2*3.1415*r;
 if(cir>0)
    console.log(cir.toFixed(2));
    else
    console.log("Error");

  //end-here
});
