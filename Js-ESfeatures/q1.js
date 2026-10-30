// Q1: Dynamic Data Parser
const apiData = [
    "25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined
];

// Arrays to store valid and invalid numeric data
const validNumbers = [];
const invalidNumbers = [];

// Display original data
console.log("========== DYNAMIC DATA PARSER ==========");
console.log("Original API Data:", apiData);

// Loop through each value
for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Convert value into Number, Boolean, and String
    const numValue = Number(value);
    const boolValue = Boolean(value);
    const strValue = String(value);

    console.log(`\n---------- Item ${i + 1} ----------`);
    console.log("Original Value:", value);
    console.log("Number Form:", numValue);
    console.log("Boolean Form:", boolValue);
    console.log("String Form:", strValue);

    // Number.isNaN() checks whether the converted result is NaN.
    // Empty or whitespace-only strings convert to 0, so we
    // explicitly reject them as invalid numeric input.
    const isBlankString =
        typeof value === "string" && value.trim() === "";

    const isInvalid =
        isBlankString ||
        Number.isNaN(numValue) ||
        (typeof value === "string" &&
            value.trim() !== "" &&
            !Number.isFinite(numValue)) ||
        (typeof value === "string" &&
            value.trim() !== "" &&
            !/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(value.trim()));

    // Store values in the appropriate array
    if (isInvalid) {
        invalidNumbers.push(value);
        console.log("Status: INVALID NUMBER");
    } else {
        validNumbers.push(numValue);
        console.log("Status: VALID NUMBER");
    }
}

// Display final report
console.log("\n========== FINAL REPORT ==========");

console.log("\nValid Numeric Data:");
for (let i = 0; i < validNumbers.length; i++) {
    console.log(`${i + 1}. ${validNumbers[i]}`);
}

console.log("\nInvalid Numeric Data:");
for (let i = 0; i < invalidNumbers.length; i++) {
    console.log(`${i + 1}. ${String(invalidNumbers[i])}`);
}

console.log("\nTotal Input Values:", apiData.length);
console.log("Total Valid Numbers:", validNumbers.length);
console.log("Total Invalid Values:", invalidNumbers.length);

console.log("\n========== DEBUG OBSERVATIONS ==========");
console.log('Number("25"):', Number("25"));           // 25
console.log('Number("true"):', Number("true"));       // NaN
console.log('Number(" "):', Number(" "));             // 0
console.log("Number(null):", Number(null));            // 0
console.log("Number(undefined):", Number(undefined));  // NaN

