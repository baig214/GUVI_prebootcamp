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
var a=userInput[0].split("");
s="";
for(i=0;i<a.length;i++)
{
    s += a[i] + " ";
}
console.log(s.trim());
}
);
