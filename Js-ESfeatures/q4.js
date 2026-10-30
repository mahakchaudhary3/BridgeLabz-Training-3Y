
"use strict";

// User input: enter the number of rows.
// Default value is 5 if no input is provided.
const input = process.argv[2];
let rows = input === undefined ? 5 : Number(input);

// Validate user input
if (!Number.isInteger(rows) || rows < 1) {
    console.log("Please enter a positive integer.");
} else {
    console.log(`Pyramid Pattern (${rows} rows):`);

    // Outer loop controls the number of rows
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        // Inner loop creates stars in each row
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());
    }
}
