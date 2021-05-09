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
  var a=userInput;
  if(a<0)
  {
      console.log("Error");
  }
  else if(a==0)
  {
      console.log(0);
  }
  else
  {
      console.log(a*a);
  }


  //end-here
});
