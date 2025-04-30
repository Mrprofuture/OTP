document.getElementById('verifyButton').addEventListener('click', function() {
    const verificationCode = document.getElementById('verificationCode').value;
    const messageElement = document.getElementById('message');

    // Replace '123456' with the actual verification code you want to check against
    const correctCode = '123456';

    if (verificationCode === correctCode) {
        messageElement.textContent = 'Verification successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid verification code. Please try again.';
        messageElement.style.color = 'red';
    }
});
