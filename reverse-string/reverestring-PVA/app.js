// Función para invertir el texto
function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

// Lógica al hacer clic en el botón
document.getElementById('reverseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = invertirTexto(inputText);
    document.getElementById('outputText').innerText = reversedText;
});
