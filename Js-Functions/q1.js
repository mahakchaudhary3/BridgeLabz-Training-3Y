// Function to print the greeting and execute the callback
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Execute the callback function
    callback();
}

// Function to print the end message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Call greetUser and pass showEndMessage as a callback
greetUser("Rahul", showEndMessage);
