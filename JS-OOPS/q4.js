
// Parent Class
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Child Class
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip Class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance < 0) {
            throw new Error("Invalid distance! Please enter a valid distance.");
        }

        let farePerKm = 10;
        let fare = this.distance * farePerKm;

        return fare;
    }
}

// Creating objects
let driver1 = new Driver("Rahul", 4.8, "Car");

console.log("Driver Name:", driver1.name);
console.log("Rating:", driver1.rating);
console.log("Vehicle:", driver1.vehicle);

// Valid Trip
try {
    let trip1 = new Trip("Mathura", "Agra", 60);

    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);
    console.log("Total Fare: Rs.", trip1.calculateFare());
}
catch (error) {
    console.log("Error:", error.message);
}

// Invalid Trip
try {
    let trip2 = new Trip("Delhi", "Noida", -5);

    console.log("Total Fare: Rs.", trip2.calculateFare());
}
catch (error) {
    console.log("Error:", error.message);
}

// Missing Distance
try {
    let trip3 = new Trip("Delhi", "Agra");

    console.log("Total Fare: Rs.", trip3.calculateFare());
}
catch (error) {
    console.log("Error:", error.message);
}
