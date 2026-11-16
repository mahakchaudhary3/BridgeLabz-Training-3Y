
// Q5: Frontend Rush - Avoiding Callback Hell

// Common function to simulate each asynchronous stage
function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName + " completed!");
        if (callback) {
            callback();
        }
    }, 1000);
}

// -------------------------------------------------
// 1. Using Nested Callbacks (Callback Hell)
// -------------------------------------------------

console.log("Starting pipeline using callbacks...");

runStage("Design", () => {
    runStage("Build", () => {
        runStage("Test", () => {
            runStage("Deploy", () => {
                runStage("Celebrate", () => {
                    console.log("Pipeline completed successfully!");
                });
            });
        });
    });
});


// -------------------------------------------------
// 2. Using Async/Await (Clean Approach)
// -------------------------------------------------

// Function that returns a Promise
function runStageAsync(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed!");
            resolve();
        }, 1000);
    });
}

// Async function to execute all stages
async function startPipeline() {
    console.log("\nStarting pipeline using async/await...");

    await runStageAsync("Design");
    await runStageAsync("Build");
    await runStageAsync("Test");
    await runStageAsync("Deploy");
    await runStageAsync("Celebrate");

    console.log("Pipeline completed successfully!");
}

// Calling async function
startPipeline();
