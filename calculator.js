// Initialize an empty string to store the input from the calculator buttons
let string = "";

// Select all elements with the class 'button' and store them in the 'buttons' variable
let buttons = document.querySelectorAll('.button');

// Convert the NodeList of buttons to an array and iterate over each button
Array.from(buttons).forEach((button) => {
    // Add a click event listener to each button
    button.addEventListener('click', (e) => {
        // If the '=' button is clicked, evaluate the string expression
        if (e.target.innerHTML == '=') {
            string = eval(string); // Evaluate the expression and update the string
            document.querySelector('input').value = string; // Display the result in the input field
        }
        // If the 'C' button is clicked, clear the string
        else if (e.target.innerHTML == 'C') {
            string = ""; // Reset the string to an empty string
            document.querySelector('input').value = string; // Clear the input field
        }
        // For any other button, append its value to the string
        else {
            console.log(e.target); // Log the clicked button element to the console for debugging
            string = string + e.target.innerHTML; // Append the button's value to the string
            document.querySelector('input').value = string; // Display the updated string in the input field
        }
    });
});
