// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Get elements from the DOM
const inputField = document.getElementById('inputString');
const reverseButton = document.getElementById('reverseButton');
const outputField = document.getElementById('reversedString');

// Add event listener to the button
reverseButton.addEventListener('click', function() {
    const inputValue = inputField.value;
    const reversedValue = reverseString(inputValue);
    outputField.textContent = reversedValue;
});