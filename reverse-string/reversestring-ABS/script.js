function reverseString() {
    // Obtenemos el valor del input
    const input = document.getElementById('inputString').value;
    const errorDiv = document.getElementById('error');
    const resultContainer = document.getElementById('resultContainer');
    const reversedString = document.getElementById('reversedString');
    
    // Limpiamos mensajes anteriores
    errorDiv.classList.add('hidden');
    resultContainer.classList.add('hidden');

    if (input.length === 0) {
        // Si el input está vacío mostramos un error
        errorDiv.classList.remove('hidden');
    } else {
        // Si hay contenido, invertimos la cadena
        const reversed = input.split('').reverse().join('');
        reversedString.textContent = reversed;

        // Mostramos el resultado y el botón de copiar
        resultContainer.classList.remove('hidden');
    }
}

function copyToClipboard() {
    // Copiamos el contenido de la cadena invertida al portapapeles
    const reversedString = document.getElementById('reversedString').textContent;
    navigator.clipboard.writeText(reversedString)
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
}
