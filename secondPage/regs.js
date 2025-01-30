var firstName=document.getElementById('firstName');
var lastName=document.getElementById('lastName');
var date=document.getElementById('date');
var emailAddress=document.getElementById('emailAddress');
var passwordPage=document.getElementById('passwordPage')
var userName=document.getElementById('userName');
var country=document.getElementById('country');
var registerForm=document.getElementById('registerForm');
var userList= JSON.parse(localStorage.getItem('user'))||[]
registerForm.addEventListener('submit',function(event){
    event.preventDefault();
    // localStorage.setItem('firstName', firstName.value);
    // localStorage.setItem('lastName', lastName.value);
    // localStorage.setItem('date', date.value);
    // localStorage.setItem('emailAddress', emailAddress.value);
    // localStorage.setItem('passwordPage', passwordPage.value);
    // localStorage.setItem('userName', userName.value);
    // localStorage.setItem('country', country.value);
    localStorage.setItem('key','i am test')//set variable in localStorage
    console.log(localStorage.getItem('key'));
    var user=
        {
            firstName:firstName.value,
            lastName:lastName.value,
            date:date.value,
            emailAddress:emailAddress.value,
            passwordPage:passwordPage.value,
            userName:userName.value,
            country:country.value
        }
    userList.push(user)
    localStorage.setItem('user',JSON.stringify(userList))
    alert('successful register')
    window.location.href='/firstPage/login.html'
    })
