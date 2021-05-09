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
a=userInput[0];
b=userInput[1];
c=userInput[2];

if(a,b,c>0)
{
if(a>b)
{
    console.log(a);
}
else if(a>c)
{
    console.log(a);
}
else if (b>c)
{
    console.log(b);
}
else
{
  console.log(c);
}
}
else
{
console.log(0);
}

  //end-here
});
