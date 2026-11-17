
// Constructor Function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype Method
Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    let newPrice = this.price - discount;

    return newPrice;
};

// Creating 3 products
let product1 = new Product("Laptop", 50000);
let product2 = new Product("Mobile", 20000);
let product3 = new Product("Headphones", 5000);

// Applying different discounts
console.log("Product:", product1.name);
console.log("Original Price:", product1.price);
console.log("After Discount:", product1.applyDiscount(10));

console.log("----------------------");

console.log("Product:", product2.name);
console.log("Original Price:", product2.price);
console.log("After Discount:", product2.applyDiscount(20));

console.log("----------------------");

console.log("Product:", product3.name);
console.log("Original Price:", product3.price);
console.log("After Discount:", product3.applyDiscount(15));
