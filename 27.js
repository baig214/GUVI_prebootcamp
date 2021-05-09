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
  str=userInput[0];
 var splitString = str.split("");

    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);

  //end-here
});
