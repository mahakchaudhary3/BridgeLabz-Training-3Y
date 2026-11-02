let text = document.getElementById("text");
let counter = document.getElementById("counter");
let resetBtn = document.getElementById("resetBtn");

// Update remaining characters
text.addEventListener("input", function() {
    let remaining = 100 - text.value.length;

    counter.textContent = remaining;

    // Change counter color
    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "yellow";
    } else if (remaining === 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
});

// Prevent typing when 100 characters are reached
text.addEventListener("keydown", function(event) {
    if (text.value.length >= 100 &&
        event.key.length === 1) {
        event.preventDefault();
    }
});

// Reset everything
resetBtn.addEventListener("click", function() {
    text.value = "";
    counter.textContent = 100;
    counter.style.color = "black";
});