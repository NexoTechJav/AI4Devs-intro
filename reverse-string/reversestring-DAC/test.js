// Example unit tests for the Text Reverser app
describe('Text Reverser', () => {
    test('reverses text correctly', () => {
        const text = 'Hello, welcome to AI4Devs';
        const reversed = text.split('').reverse().join('');
        expect(reversed).toBe('sveD4IA ot emoclew ,olleH');
    });

    test('copy button is hidden initially', () => {
        const copyButton = document.getElementById('copyButton');
        expect(copyButton.classList.contains('hidden')).toBe(true);
    });

    test('reverse button is enabled only when text is entered', () => {
        inputText.value = 'Test';
        inputText.dispatchEvent(new Event('input'));
        expect(reverseButton.disabled).toBe(false);
    });

    test('clear button clears text and hides elements', () => {
        inputText.value = 'Test';
        inputText.dispatchEvent(new Event('input'));
        clearButton.click();
        expect(inputText.value).toBe('');
        expect(reverseButton.disabled).toBe(true);
        expect(reversedText.classList.contains('hidden')).toBe(true);
    });
});
