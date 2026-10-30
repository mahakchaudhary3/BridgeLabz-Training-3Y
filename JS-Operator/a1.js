
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary = salary + bonus;
    }

    console.log("Total Salary:", totalSalary);
}

calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus:", bonus);
