const registerForm = document.querySelector(".register");
const loginForm = document.querySelector(".login");
const clickRegister = document.querySelector(".login-register");
const clickLogin = document.querySelector(".register-login");

clickRegister.addEventListener('click', function(){
    registerForm.style.display = "block";
    loginForm.style.display = "none";
})
clickLogin.addEventListener('click', function(){
    registerForm.style.display = "none";
    loginForm.style.display = "block";
})

