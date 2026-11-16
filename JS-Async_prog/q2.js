
// Q3: Bug Tracker - Callback to Promise Migration

// Promise-based function to fetch bugs
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // Simulate random API success or failure
            let isSuccess = Math.random() > 0.5;

            if (isSuccess) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("API Error: Failed to fetch bugs!");
            }

        }, 1000);
    });
}

// Calling getBugs() and handling the Promise
getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log(error);
    });
