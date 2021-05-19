let entrada = 20

if (entrada % 3 === 0 && entrada % 5 === 0) {
    console.log("FizzBuzz")
} else if (entrada % 3 === 0){
    console.log("Fizz")
} else if (entrada % 5 === 0) {
    console.log("Buzz")
} else {
    console.log(entrada)
}