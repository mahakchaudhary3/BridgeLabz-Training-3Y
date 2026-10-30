
// Q1: Personalized Login Greeting

// Declare the user's name
const userName = "Amit";

// Get the current hour (0 to 23)
const currentHour = new Date().getHours();

// Variable to store the greeting message
let greeting;

// Check the current time and select a greeting
if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}


// Display the greeting
console.log(greeting);
