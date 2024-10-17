// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene referencias a los elementos del DOM
    const btnInvertir = document.getElementById('btnInvertir');
    const inputTexto = document.getElementById('inputTexto');
    const resultado = document.getElementById('resultado');

    // Agrega un evento de clic al botón
    btnInvertir.addEventListener('click', function() {
        const texto = inputTexto.value.trim();

        if (texto === "") {
            resultado.textContent = "Por favor, ingresa una palabra.";
            return;
        }

        // Llama a la función para invertir el texto
        const textoInvertido = invertirCadena(texto);

        // Muestra el resultado
        resultado.textContent = textoInvertido;
    });

    /**
     * Función para invertir una cadena de texto.
     * @param {string} cadena - La cadena de texto a invertir.
     * @returns {string} - La cadena invertida.
     */
    function invertirCadena(cadena) {
        // Convierte la cadena en un array de caracteres, invierte el array y lo une de nuevo en una cadena
        return cadena.split('').reverse().join('');
    }
});
