let dropdownBtn = document.getElementById("dropdownBtn");
let options = document.getElementById("options");
let dropdown = document.getElementById("dropdown");

// Show or hide dropdown options
dropdownBtn.addEventListener("click", function() {
    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
});

// Update button text when an option is clicked
options.addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
        dropdownBtn.textContent = event.target.textContent + " ▼";
        options.style.display = "none";
    }
});

// Close dropdown when clicking outside (capturing phase)
document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
        options.style.display = "none";
    }
}, true);