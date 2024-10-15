function reverseString() {
    // Get the input value
    const input = document.getElementById('userInput').value;

    // Reverse the input string
    const reversed = input.split('').reverse().join('');

    // Display the reversed string in a popup
    alert(reversed);
}