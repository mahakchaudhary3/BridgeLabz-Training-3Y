```javascript
// Q6: Event-Based Counter Simulation

// Step 1: Initialize the counter
let count = 0;

// Step 2: Function to increment the counter
function increment() {
    count++;
    console.log("Increment Clicked: Count =", count);
}

// Step 3: Function to decrement the counter
function decrement() {
    count--;
    console.log("Decrement Clicked: Count =", count);
}

// Step 4: Nested function to demonstrate scope
function showCounterScope() {
    console.log("Counter before nested function:", count);

    function updateCounter() {
        count++;
        console.log("Counter inside nested function:", count);
    }

    // Call the nested function
    updateCounter();

    console.log("Counter after nested function:", count);
}

// Step 5: Simulate clicks by calling functions manually
console.log("Initial Count:", count);

increment();
increment();
decrement();

// Step 6: Demonstrate nested function scope
showCounterScope();

// Step 7: Display the final counter value
console.log("Final Count:", count);
```