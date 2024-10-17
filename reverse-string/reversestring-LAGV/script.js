document.getElementById('reverseButton').addEventListener('click', function() {
  const input = document.getElementById('inputString').value;
  const reversedString = input.split('').reverse().join('');
  const outputArea = document.getElementById('outputArea');

  outputArea.value = reversedString;
  outputArea.style.transition = 'background-color 0.3s';
  outputArea.style.backgroundColor = '#e0f7fa'; // Highlight color

  // Reset the copy section
  resetCopySection();
});

document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('inputString').value = '';
  document.getElementById('outputArea').value = '';
  resetCopySection();
});

document.getElementById('copyIcon').addEventListener('click', function() {
  const outputArea = document.getElementById('outputArea');
  outputArea.select();
  document.execCommand('copy');

  const copyText = document.getElementById('copyText');
  const copyIcon = document.getElementById('copyIcon');
  
  copyText.textContent = 'Copied';
  copyIcon.textContent = '✅'; // Change icon to checkmark

  setTimeout(() => {
      resetCopySection();
  }, 2000); // Reset after 2 seconds
});

function resetCopySection() {
  const copyText = document.getElementById('copyText');
  const copyIcon = document.getElementById('copyIcon');

  copyText.textContent = 'Copy';
  copyIcon.textContent = '📋'; // Reset icon
}
