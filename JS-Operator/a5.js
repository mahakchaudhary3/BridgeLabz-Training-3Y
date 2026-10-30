
// Q10: Departmental Employee Evaluator

// Store department names and performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Display report heading
console.log("===== DEPARTMENTAL PERFORMANCE REPORT =====");

// Loop through each department
for (let i = 0; i < departments.length; i++) {

    // Extract department name and score
    const departmentName = departments[i][0];
    const score = departments[i][1];
    let performance;

    // Evaluate performance using nested if-else conditions
    if (score >= 90) {
        performance = "Excellent";
    } else {
        if (score >= 75 && score <= 89) {
            performance = "Good";
        } else {
            if (score >= 60 && score <= 74) {
                performance = "Average";
            } else {
                performance = "Needs Improvement";
            }
        }
    }

    // Print department performance details
    console.log(`Department: ${departmentName}`);
    console.log(`Score: ${score}`);
    console.log(`Performance: ${performance}`);
    console.log("------------------------------");
}
