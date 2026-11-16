
// Q7: The Lazy Loader - Promise.allSettled()

// Function to load Profile
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

// Function to load Posts
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

// Function to load Messages
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

// Record starting time
let startTime = Date.now();

// Execute all Promises together
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
])
.then((results) => {

    let moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(moduleNames[index] + ": Success - " + result.value);
        } else {
            console.log(moduleNames[index] + ": Failed - " + result.reason);
        }
    });

    // Calculate total time
    let endTime = Date.now();
    let totalTime = endTime - startTime;

    console.log("Total time taken: " + totalTime + " ms");
});
