var firstName=document.getElementById('firstName');
var lastName=document.getElementById('lastName');
var date=document.getElementById('date');
var emailAddress=document.getElementById('emailAddress');
var passwordPage=document.getElementById('passwordPage')
var userName=document.getElementById('userName');
var country=document.getElementById('country');
var registerForm=document.getElementById('registerForm');
registerForm.addEventListener('submit',function(event){
    event.preventDefault();
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('date', date.value);
    localStorage.setItem('emailAddress', emailAddress.value);
    localStorage.setItem('passwordPage', passwordPage.value);
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('country', country.value);
    localStorage.setItem('key','i am test')//set variable in localStorage
    console.log(localStorage.getItem('key'))
    alert('successful register')
    window.location.href='/firstPage/login.html'
})