
"use strict";

function demo(a, b) {
    // Declare variables explicitly
    let total = 10;

    console.log("First parameter:", a);
    console.log("Second parameter:", b);
    console.log("Total:", total);

    // Correct way to delete an object property
    const employee = {
        name: "Amit",
        salary: 45000
    };

    delete employee.salary;

    console.log("Employee:", employee);
}

demo(5, 10);
