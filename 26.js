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

  b=[];
  c=[];
var a=userInput[0].split("");
for(var i=0;i<a.length;i++)
{
    if(a[i]%2==0)
    {
        b.push(a[i]);
    }
    else if(a[i]%2!=0)
    {
        c.push(a[i]);
    }

}
b.sort();
c.sort();
 console.log(b.join(" "));
 console.log(c.join(" "));


  //end-here
});
