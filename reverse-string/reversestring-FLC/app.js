// DOM Elements
const userInput = document.getElementById("user-input");
const reverseBtn = document.getElementById("reverse-btn");
const copyBtn = document.getElementById("copy-btn");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-message");

// Function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse Button Click Event
reverseBtn.addEventListener("click", () => {
  const inputValue = userInput.value.trim();

  if (inputValue === "") {
    errorMessage.textContent = "Please enter a valid string.";
    result.textContent = "";
    copyBtn.disabled = true;
  } else {
    const reversedString = reverseString(inputValue);
    result.textContent = reversedString;
    errorMessage.textContent = "";
    copyBtn.disabled = false; // Enable copy button after reversing
  }
});

// Copy Button Click Event
copyBtn.addEventListener("click", () => {
  const reversedText = result.textContent;
  navigator.clipboard
    .writeText(reversedText)
    .then(() => {
      alert("Reversed text copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

// Input Change Event to Reset Validation
userInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});
