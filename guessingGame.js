// 4. Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "));
} while (guess !== correctNumber);
console.log("Congratulations! You guessed the correct number.");