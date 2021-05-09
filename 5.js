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
 var inp=userInput[0];
var ss=[];
for(var i=1;i<=3;i++)
{
  var a=i*inp;
    ss.push(a);
    //console.log(i + " ");
}
console.log(ss.join(" "));
  //end-here
});
