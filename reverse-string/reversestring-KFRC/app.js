document.getElementById("invertButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById("outputText").textContent = reversedText;
});
