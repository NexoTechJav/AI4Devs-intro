// Captura el formulario y el div de salida
const reverseForm = document.getElementById('reverseForm');
const outputDiv = document.getElementById('output');

// Agregar un listener al formulario para el evento submit
reverseForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener el valor de la cadena de texto ingresada
    const inputString = document.getElementById('inputString').value;

    // Llamar a la función para invertir la cadena
    const reversedString = reverseString(inputString);

    // Mostrar el resultado en el div de salida
    outputDiv.textContent = reversedString;
});

// Función que invierte el orden de la cadena
function reverseString(str) {
    return str.split('').reverse().join('');
}
