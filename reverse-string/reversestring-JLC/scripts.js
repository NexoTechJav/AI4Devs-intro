// Función para invertir el texto
function reverseString() {
    const inputText = document.getElementById("inputText").value;
    const reversedText = inputText.split("").reverse().join("");
    document.getElementById("outputText").innerText = reversedText;
}

// Esperar que el DOM cargue para añadir los event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Asignar función al botón "Reverse"
    document.getElementById("reverseButton").addEventListener("click", reverseString);

    // Asignar función al botón "Copy"
    document.getElementById("copyButton").addEventListener("click", function() {
        const outputText = document.getElementById("outputText").innerText;
        navigator.clipboard.writeText(outputText);
    });
});
