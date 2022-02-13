const registerForm = document.querySelector(".registerForm");
const loginForm = document.querySelector(".loginForm");
const clickRegister = document.querySelector(".register");
const clickLogin = document.querySelector(".login");

clickRegister.addEventListener('click', function(){
    registerForm.style.display = "block";
    loginForm.style.display = "none";
})
clickLogin.addEventListener('click', function(){
    registerForm.style.display = "none";
    loginForm.style.display = "block";
})

