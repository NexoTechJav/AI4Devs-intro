// Reverse the input string and display it
document.getElementById("reverseButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const reversedText = inputText.split("").reverse().join("");
  document.getElementById("output").textContent = reversedText;
});

// Copy the reversed message to the clipboard
document.getElementById("copyButton").addEventListener("click", function () {
  const reversedText = document.getElementById("output").textContent;
  if (reversedText) {
    navigator.clipboard
      .writeText(reversedText)
      .then(() => {
        alert("Reversed text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  } else {
    alert("No reversed text to copy!");
  }
});
