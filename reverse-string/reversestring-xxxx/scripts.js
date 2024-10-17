document.getElementById('invertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('outputText').innerText = reversedText;
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerText = '';
});
