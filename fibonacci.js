// First run "npm install --save readline-sync" in terminal
const readline = require("readline-sync");

let number = readline.question("What number do you want to calculate?\n");

function fibonacci(number) {
    if (number < 0){
        return "Incorrect input, it must be positive"
    } else if (number == 0){
        return 0
    } else if (number == 1){
        return 1
    } else {
        return fibonacci(number-1) + fibonacci(number-2)
    }
}

console.log(fibonacci(number))
