// Exercise 1: Temperature check
let temperature = 30; 

// If-else statements
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature <= 15) {
    console.log("It's cold.");
} else if (temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Switch statements
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility Check
let number = 6; 

// If-else statements
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Switch statements
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

