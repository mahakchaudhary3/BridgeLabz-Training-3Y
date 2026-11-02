
// Q4: Custom Form Builder using Classes

// Create a FormBuilder class
class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    // Method to create the form dynamically
    createForm() {
        let formHTML = '<form id="dynamicForm">';

        // Create input fields using the fields array
        this.fields.forEach(field => {
            formHTML += `
                <label for="${field.name}">${field.label}</label>
                <input
                    type="${field.type}"
                    id="${field.name}"
                    name="${field.name}"
                    placeholder="Enter ${field.label}"
                    required
                >
            `;
        });

        formHTML += '<button type="submit">Submit</button>';
        formHTML += '</form>';

        // Insert the form into the HTML page
        this.container.innerHTML = formHTML;

        // Handle form submission
        const form = document.getElementById("dynamicForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            // Get all entered form values
            const formData = this.getFormData();

            // Display the returned object
            document.getElementById("output").textContent =
                JSON.stringify(formData, null, 2);

            console.log(formData);
        });
    }

    // Method to collect all entered values
    getFormData() {
        const formData = {};

        this.fields.forEach(field => {
            const input = document.getElementById(field.name);

            formData[field.name] = input.value;
        });

        return formData;
    }
}

// Define the fields for the form
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

// Create a FormBuilder object
const formBuilder = new FormBuilder(fields, "formContainer");

// Generate the form
formBuilder.createForm();
