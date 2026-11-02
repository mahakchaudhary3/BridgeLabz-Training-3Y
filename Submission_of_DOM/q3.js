let search = document.getElementById("search");
let table = document.getElementById("studentTable");
let message = document.getElementById("message");

// Filter students while typing
search.addEventListener("input", function() {

    let value = search.value.toLowerCase();
    let rows = table.getElementsByTagName("tr");
    let count = 0;

    for (let i = 0; i < rows.length; i++) {

        let rowText = rows[i].textContent.toLowerCase();

        if (rowText.includes(value)) {
            rows[i].style.display = "";
            count++;
        } else {
            rows[i].style.display = "none";
        }
    }

    // Show message if no student matches
    if (count === 0) {
        message.textContent = "No results found";
    } else {
        message.textContent = "";
    }

});