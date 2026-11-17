
// FitnessAnalytics Class
class FitnessAnalytics {
    constructor(workoutData) {
        if (!workoutData || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty!");
        }

        this.workoutData = workoutData;
    }

    // Get users with more than 7000 steps
    getActiveUsers() {
        return this.workoutData.filter(user => user.steps > 7000);
    }

    // Calculate average calories
    getAverageCalories() {
        let totalCalories = this.workoutData.reduce(
            (sum, user) => sum + user.calories, 0
        );

        return totalCalories / this.workoutData.length;
    }

    // Format user summary using map()
    getUserSummary() {
        return this.workoutData.map(user =>
            user.user + " walked " + user.steps +
            " steps and burned " + user.calories + " calories."
        );
    }
}

// Workout Data
let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

// Using try-catch
try {
    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("Average Calories:");
    console.log(fitness.getAverageCalories());

    console.log("User Summary:");
    console.log(fitness.getUserSummary());

}
catch (error) {
    console.log("Error:", error.message);
}
