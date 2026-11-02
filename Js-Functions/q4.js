// Create an object using an arrow function
let user = {
    name: "Rahul",

    showName: () => {
        console.log(this.name);
    }
};

// Call the method
user.showName();


// Fix it by using a normal function
let user2 = {
    name: "Rahul",

    showName: function () {
        console.log(this.name);
    }
};

// Call the method
user2.showName();
