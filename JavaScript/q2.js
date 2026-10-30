
// Q3: Monthly Expense Tracker

// Array containing expenses for 5 categories
const expenses = [5000, 2000, 10000, 1500, 1000];
// Categories: Food, Travel, Rent, Bills, Leisure

// Calculate the total expenses using reduce()
let totalExpense = expenses.reduce((sum, expense) => sum + expense, 0);

// Calculate the average expense
let averageExpense = totalExpense / expenses.length;

// Add 10% tax to the total using arithmetic and assignment operators
let tax = totalExpense * 0.10;
totalExpense += tax;

// Display the results using toFixed(2)
console.log("Monthly Expense Tracker");
console.log("-----------------------");
console.log(`Total Expense (before tax): ₹${(totalExpense - tax).toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount (after tax): ₹${totalExpense.toFixed(2)}`);
