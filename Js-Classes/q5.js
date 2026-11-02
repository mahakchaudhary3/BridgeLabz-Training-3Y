// Q6: Employee Management System (Classes + Object Methods)

// Create an Employee class
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Method to calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Method to apply bonus to monthly salary
    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

// Create 5 employee objects
const employee1 = new Employee(1, "Amit", "IT", 40000);
const employee2 = new Employee(2, "Priya", "HR", 35000);
const employee3 = new Employee(3, "Rahul", "Finance", 45000);
const employee4 = new Employee(4, "Neha", "IT", 50000);
const employee5 = new Employee(5, "Rohan", "Marketing", 30000);

// Store employees in an array
const employees = [
    employee1,
    employee2,
    employee3,
    employee4,
    employee5
];

// Apply a 10% bonus to every employee's monthly salary
employees.forEach(employee => {
    employee.applyBonus(10);
});

// Calculate and display annual salary for each employee
console.log("Employee Annual Salaries:");

employees.forEach(employee => {
    console.log(
        `${employee.name} (${employee.department}): ₹${employee.getAnnualSalary()}`
    );
});

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

// Display total annual payout of the company
console.log("\nTotal Annual Payout: ₹" + totalAnnualPayout);
