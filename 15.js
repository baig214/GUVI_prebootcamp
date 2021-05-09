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
a =userInput;
for(i=1;i<=a;i++)
{
    console.log(+i);
}
}
);
