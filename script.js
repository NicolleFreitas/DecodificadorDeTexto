document.getElementById('encryptBtn').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value;
  const encryptedText = encrypt(inputText);
  document.getElementById('outputText').textContent = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value;
  const decryptedText = decrypt(inputText);
  document.getElementById('outputText').textContent = decryptedText;
});

function encrypt(text) {
  return text.replace(/e/g, '3').replace(/a/g, '4').replace(/o/g, '0').replace(/i/g, '1');
}

function decrypt(text) {
  return text.replace(/3/g, 'e').replace(/4/g, 'a').replace(/0/g, 'o').replace(/1/g, 'i');
}
