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
A=userInput[0].split(" ");
N=A[1];
//B=A[0].repeat(N).split("");
for(i=0;i<N;i++)
{
    console.log(A[0]);
}

  //end-here
});
