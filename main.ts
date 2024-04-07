console.log("Wellcome to code Fahad - Number guessing project");
let random=Math.floor(Math.random()*10);
import inquirer from "inquirer";
while(true){
    const randomNumber=await inquirer.prompt([
        {
            type:"number",
            name:"guess",
            message:"Enter a guess number(1 to 10) ="
        }
    ])
let answer=randomNumber.guess;
if(random==answer){
    console.log("congrulation your guess number is correct");
    break;
}else{
    console.log("sorry your guess number is wrong");
}
if(random>answer){
    console.log("hint, number is higher");
}else{
    console.log("hint, number is lower")
}
console.log("Game over");
}
