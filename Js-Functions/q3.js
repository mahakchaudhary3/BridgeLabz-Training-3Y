// Person constructor
function Person(name) {
    this.name = name;
}

// Add a method to Person's prototype
Person.prototype.printName = function () {
    console.log("Name: " + this.name);
};

// Student constructor
function Student(name, branch) {
    // Call Person constructor to initialize name
    Person.call(this, name);

    // Add branch property
    this.branch = branch;
}

// Inherit Person's prototype methods
Student.prototype = Object.create(Person.prototype);

// Set the constructor back to Student
Student.prototype.constructor = Student;

// Add a method to Student's prototype
Student.prototype.printBranch = function () {
    console.log("Branch: " + this.branch);
};

// Create a Student object
let student1 = new Student("Rahul", "Computer Science");

// Call both methods
student1.printName();
student1.printBranch();

// Demonstrate the prototype chain
console.log(
    "Student inherits from Person:",
    Person.prototype.isPrototypeOf(student1)
);

console.log(
    "Person prototype is in Student's prototype chain:",
    Person.prototype.isPrototypeOf(Student.prototype)
);