
"use strict";

// Watch variable to observe program execution
let watchVariable = "Program Started";

function showMessage() {
    // Declare greeting using let
    let greeting = "Welcome";

    watchVariable = "Inside showMessage()";

    console.log(greeting);
    console.log("Watch Variable:", watchVariable);
}

showMessage();

watchVariable = "Program Finished";

console.log("Final Watch Variable:", watchVariable);
