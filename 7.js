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
 if (userInput==1)
  {
      console.log(31)
  }
  else if (userInput==2)
  {
      console.log(28)
  }
    else if (userInput==3)
  {
      console.log(31)
  }  else if (userInput==4)
  {
      console.log(30)
  }  else if (userInput==5)
  {
      console.log(31)
  }  else if (userInput==6)
  {
      console.log(30)
  }  else if (userInput==7)
  {
      console.log(31)
  }  else if (userInput==8)
  {
      console.log(31)
  }  else if (userInput==9)
  {
      console.log(30)
  }  else if (userInput==10)
  {
      console.log(31)
  }  else if (userInput==11)
  {
      console.log(30)
  }  else if (userInput==12)
  {
      console.log(31)
  }
  else
  {
      console.log("Error");
  }
 // console.log(userInput);

  //end-here
});
