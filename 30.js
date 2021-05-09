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

var a1=userInput[0].split(" ");
var a = a1[0];
var b = a1[1];
var c = a1[2];

var r = Math.sqrt(b * b - 4 * a * c);
var d = 2 * a;

var r1 = ( -b + r ) / d;
var r2 = ( -b - r ) / d;

console.log(r1.toFixed(2));
console.log(r2.toFixed(2));

  //end-here
});
