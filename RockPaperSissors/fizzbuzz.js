let userInput = parseInt(prompt("Please enter a number: "));
console.log(`User Entered: ${userInput}`)

for (let i=0; i < userInput; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}