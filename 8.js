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
    function isEven(s)
{
    let l = s.length;
    let dotP = false;
    for (let i = l - 1; i >= 0; i--)
    {
        if (s[i] == '0' && dotP == false)
        continue;
        if (s[i] == '.')
        {
            dotP = true;
            continue;
        }
        if ((s[i] - '0') % 2 == 0)
            return true;

        return false;
    }
}
    let s = userInput;
   if (isEven(s))
    console.log("Even");
    else
    console.log("Odd")
  //end-here
});
