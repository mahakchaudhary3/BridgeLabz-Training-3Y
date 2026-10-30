
// Q9: Random Math Quiz Generator

// Generate two random numbers between 1 and 20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Array of arithmetic operators
const operators = ['+', '-', '*', '/'];

// Select a random operator
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

// Variable to store the correct answer
let answer;

// Calculate the answer using switch
switch (operator) {
    case '+':
        answer = num1 + num2;
        break;

    case '-':
        answer = num1 - num2;
        break;

    case '*':
        answer = num1 * num2;
        break;

    case '/':
        answer = num1 / num2;
        break;
}

// Display the question and correct answer
console.log("Random Math Quiz");
console.log("----------------");
console.log(`Question: ${num1} ${operator} ${num2} = ?`);

// Round division answers to two decimal places
if (operator === '/') {
    console.log(`Correct Answer: ${answer.toFixed(2)}`);
} else {
    console.log(`Correct Answer: ${answer}`);
}

