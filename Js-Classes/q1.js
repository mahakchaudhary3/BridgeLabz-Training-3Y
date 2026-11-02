// Q1: E-Commerce Product Manager (Classes + Objects)

// Create a Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply discount
    applyDiscount(discountPercentage) {
        this.price = this.price - (this.price * discountPercentage / 100);
    }

    // Method to display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

// Create multiple product objects
const product1 = new Product(1, "Laptop", 50000, "Electronics");
const product2 = new Product(2, "Headphones", 1500, "Accessories");
const product3 = new Product(3, "Mouse", 800, "Accessories");
const product4 = new Product(4, "Keyboard", 2000, "Electronics");

// Store all products in an array
const products = [product1, product2, product3, product4];

// Apply 10% discount to the first product
product1.applyDiscount(10);

console.log("All Product Details:");

products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products with price greater than 1000
const filteredProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with Price Greater Than ₹1000:");

filteredProducts.forEach(product => {
    console.log(product.displayDetails());
});
