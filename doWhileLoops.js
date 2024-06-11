// Exercise 5: Do While loops
// 1. Print numbers from 1 to 10
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2. Calculate the sum of all numbers from 1 to 100 and print the result
let sum = 0;
i = 1;
do {
    sum += i;
    i++;
} while (i <= 100);
console.log(sum);

// 3. Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.
let number;
do {
    number = parseInt(prompt("Enter a number greater than 10: "));
} while (number <= 10);

