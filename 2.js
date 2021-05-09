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
  var n=4;
function Fact(userInput) {
    var ans=1;
    if(n<0)
    {
        console.log("negative number");

    }

    for(var i=2;i<=userInput;i++)
    {
        ans=ans*i;

    }
    console.log(ans);
}

Fact(userInput);

  //end-here
});
