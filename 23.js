const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var a =(userInput[0]).split(" ");
var b=parseInt(a[0]);
var c=parseInt(a[1]);
var hcf=0;
for(let i=1; i <= b && i <= c; ++i)
{
        if(b%i==0 && c%i==0)
            hcf = i;
}
console.log(hcf);
});
