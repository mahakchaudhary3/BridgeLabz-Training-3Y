
// ================================
// 1. Prototype-based inheritance
// ================================

// Person constructor
function Person(name) {
    this.name = name;
}

// Method using prototype
Person.prototype.showName = function () {
    console.log("Name: " + this.name);
};

// Student constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student method
Student.prototype.showBranch = function () {
    console.log("Branch: " + this.branch);
};

// Create object using prototype version
let student1 = new Student("Rahul", "Computer Science");

console.log("Prototype Version:");
student1.showName();
student1.showBranch();


// ================================
// 2. ES6 class-based inheritance
// ================================

// Parent class
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

// Child class
class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

// Create object using class version
let student2 = new StudentClass("Rahul", "Computer Science");

console.log("Class Version:");
student2.showName();
student2.showBranch();
