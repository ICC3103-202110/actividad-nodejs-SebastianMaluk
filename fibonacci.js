const readline = require("readline-sync");

let number = readline.question("What number?\n");

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
