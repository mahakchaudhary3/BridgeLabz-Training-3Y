function changeTheme(theme) {

    // Add the selected theme class to body
    document.body.setAttribute("class", theme);

    // Save the current theme in a custom attribute
    document.body.setAttribute("data-theme", theme);

}