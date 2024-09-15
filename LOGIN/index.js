
const showPasswordBtn = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');

showPasswordBtn.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
