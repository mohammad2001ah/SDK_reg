var email = document.getElementById('email'); 
var password = document.getElementById('password'); 
var loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (email.value == localStorage.getItem('emailAddress') && password.value == localStorage.getItem('passwordPage')) {
        window.location.href = "login.html";
    } 
    else {
        alert('Wrong email or password');
    }
});