
"use strict";

// Employee data
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== EMPLOYEE BONUS REPORT =====");

try {
    // Loop through each employee
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        // Validate employee object and required properties
        if (
            !employee ||
            typeof employee.name !== "string" ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error(`Invalid employee data at index ${i}`);
        }

        // Convert salary and years into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate numeric conversions
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error(`Invalid salary or years for ${employee.name}`);
        }

        // Calculate bonus based on experience
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10; // 10% bonus
        } else {
            bonus = salary * 0.05; // 5% bonus
        }

        // Calculate total salary
        const totalSalary = salary + bonus;

        // Print formatted employee details using template literals
        console.log(`\nEmployee Name : ${employee.name}`);
        console.log(`Original Salary: ${employee.salary}`);
        console.log(`Years of Work  : ${years}`);
        console.log(`Converted Salary: ${salary}`);
        console.log(`Bonus Amount   : ₹${bonus.toFixed(2)}`);
        console.log(`Total Salary   : ₹${totalSalary.toFixed(2)}`);
        console.log("-------------------------------");
    }
} catch (error) {
    // Handle conversion or missing property errors
    console.log("Error:", error.message);
}
