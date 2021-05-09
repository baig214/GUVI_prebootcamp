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
  var z="";
  var a=userInput;
 if(a>0)
 {
     b=1;
     while(b<=a)
     {
         c=9*b;
         z=z + c + " ";
         b=b+1;
     }
     console.log(z.trim());
 }
 else
 {
     console.log("NULL");
 }

  //end-here
});
