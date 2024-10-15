El siguiente prompt lo ingresè en ChatGPT O1-MINI

Eres un desarrollador de software front end.
Debes crear una página web con lógica en javascript que invierte el orden de una cadena de texto.
Por lo tanto en un archivo html debes crear un campo de texto donde ingresar la palabra a reversar.
La lógica del proceso de reversamiento la debes hacer en un archivo javascript.
Agregar también un poco de diseño en la pàgina web pero sin usar css.

Respuesta del chat
¡Claro! A continuación, te proporcionaré un ejemplo sencillo de cómo crear una página web que invierte el orden de una cadena de texto utilizando HTML y JavaScript.
La lógica de reversamiento estará en un archivo JavaScript separado, y aplicaremos algunos estilos básicos directamente en el HTML para darle un poco de diseño sin usar CSS externo.

## Estructura del Proyecto

1. **index.html**: Archivo principal que contiene la estructura de la página.
2. **script.js**: Archivo JavaScript que contiene la lógica para invertir la cadena de texto.

## 1. Archivo HTML (`index.html`)

........
```

### Explicación de la Estructura HTML

- **Encabezado (`<head>`)**:
  - Se establece el conjunto de caracteres y el título de la página.
  - Se enlaza el archivo JavaScript `script.js` con el atributo `defer` para asegurar que el HTML se cargue antes que el script.

- **Cuerpo (`<body>`)**:
  - Se aplica un estilo en línea para definir la fuente, el color de fondo y el padding.
  - Se incluye un título principal (`<h1>`) para el encabezado de la página.
  - Se crea un campo de entrada (`<input>`) donde el usuario puede ingresar la palabra que desea invertir.
  - Se añade un botón (`<button>`) que, al ser clicado, ejecutará la función para invertir el texto.
  - Se define un área para mostrar el resultado invertido dentro de un párrafo (`<p>`).

## 2. Archivo JavaScript (`script.js`)

Este archivo contiene la lógica para invertir la cadena de texto ingresada por el usuario.

```.....
```

### Explicación de la Lógica en JavaScript

1. **Carga del DOM**:
   - Utilizamos `document.addEventListener('DOMContentLoaded', ...)` para asegurarnos de que el script se ejecute solo después de que todo el contenido HTML se haya cargado.

2. **Referencias a Elementos del DOM**:
   - Se obtienen referencias al botón, al campo de texto y al área de resultado utilizando `document.getElementById`.

3. **Evento de Clic en el Botón**:
   - Se agrega un listener para el evento `click` en el botón.
   - Al hacer clic, se obtiene el valor del campo de texto y se verifica que no esté vacío.
   - Se llama a la función `invertirCadena` pasando la cadena ingresada.
   - Se muestra el resultado invertido en el elemento correspondiente.

4. **Función para Invertir la Cadena**:
   - La función `invertirCadena` toma una cadena, la convierte en un array de caracteres con `split('')`, invierte el array con `reverse()` y luego lo une de nuevo en una cadena con `join('')`.

## Cómo Probar la Aplicación

1. **Estructura de Archivos**:
   - Asegúrate de que ambos archivos, `index.html` y `script.js`, estén en la misma carpeta.

2. **Abrir en el Navegador**:
   - Abre el archivo `index.html` en tu navegador preferido.

3. **Uso**:
   - Ingresa una palabra o frase en el campo de texto.
   - Haz clic en el botón "Invertir".
   - El resultado invertido aparecerá debajo del botón.

## Ejemplo Visual

![Ejemplo de la página invertidora de texto](https://i.imgur.com/ejemplo.png)

*(Nota: La imagen es ilustrativa. Asegúrate de ejecutar el código para ver el resultado en acción.)*

¡Y eso es todo! Ahora tienes una página web funcional que invierte cadenas de texto utilizando JavaScript, con un diseño básico aplicado directamente en el HTML.