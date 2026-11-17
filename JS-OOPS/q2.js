
// Menu items with prices
let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];

// Function to calculate bill
function calculateBill(orderItems) {
    // Get prices using map()
    let priceList = orderItems.map(item => {
        let foodItem = menu.find(menuItem => menuItem.name === item);

        if (!foodItem) {
            throw new Error(item + " is not available in the menu!");
        }

        return foodItem.price;
    });

    // Calculate total using reduce()
    let total = priceList.reduce((sum, price) => sum + price, 0);

    console.log("Ordered Items:", orderItems);
    console.log("Price List:", priceList);
    console.log("Total Bill: Rs.", total);
}

// Using try-catch
try {
    calculateBill(["Pizza", "Burger", "Pasta"]);
}
catch (error) {
    console.log("Order Error:", error.message);
}

try {
    calculateBill(["Pizza", "Sushi"]);
}
catch (error) {
    console.log("Order Error:", error.message);
}
