// Get elements
const inputText = document.getElementById('inputText');
const reverseButton = document.getElementById('reverseButton');
const clearButton = document.getElementById('clearButton');
const reversedText = document.getElementById('reversedText');
const copyButton = document.getElementById('copyButton');
const copyMessage = document.getElementById('copyMessage');
const charCount = document.getElementById('charCount');

// Update char counter and toggle buttons
inputText.addEventListener('input', () => {
    const length = inputText.value.length;
    charCount.textContent = `${length}/100`;
    const hasText = length > 0;

    reverseButton.disabled = !hasText;
    clearButton.disabled = !hasText;
    reversedText.classList.add('hidden');
    copyButton.classList.add('hidden');
    copyMessage.classList.add('hidden');
});

// Reverse the text
reverseButton.addEventListener('click', () => {
    const reversed = inputText.value.split('').reverse().join('');
    reversedText.textContent = reversed;
    reversedText.classList.remove('hidden');
    copyButton.classList.remove('hidden');
});

// Clear the text
clearButton.addEventListener('click', () => {
    inputText.value = '';
    charCount.textContent = '0/100';
    reverseButton.disabled = true;
    clearButton.disabled = true;
    reversedText.classList.add('hidden');
    copyButton.classList.add('hidden');
    copyMessage.classList.add('hidden');
});

// Copy reversed text to clipboard
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(reversedText.textContent).then(() => {
        copyMessage.classList.remove('hidden');
        setTimeout(() => copyMessage.classList.add('hidden'), 2000);
    });
});
