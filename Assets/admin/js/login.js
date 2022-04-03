var changeRegister = document.querySelector('.login__item-forgot')
var changeLogin = document.querySelector('.login__item-right')
var moveToRegister = document.querySelector(".moveRe")
var moveToLogin = document.querySelector(".moveLo")

function showRe() {
    changeRegister.classList.add('dis-flex')
    changeLogin.classList.add('dis-none')
}

function showLo() {
    changeRegister.classList.remove('dis-flex')
    changeLogin.classList.remove('dis-none')
}

moveToRegister.addEventListener('click', showRe)
moveToLogin.addEventListener('click', showLo)

// regex
var userName = document.querySelector(".username")
var userError = document.querySelector(".userError")
var btnLogin = document.querySelector(".login-btn")
var password = document.querySelector(".password")
var passwordError = document.querySelector(".passwordError")

function checkName(userName) {
    var NameRegex = /^[a-zA-Z ]{7,12}$/
    return NameRegex.test(userName)
}
userName.addEventListener("change", function () {
    if (checkName(userName.value)) {
        userError.textContent = ""
        btnLogin.disabled = false
        btnLogin.style.opacity = "1"
    } else {
        userError.textContent = "Username must be alphabetic and length 7-12"
        userError.style.color = "red"
        btnLogin.disabled = true
        btnLogin.style.opacity = "0.8"
    }
})

function checkPassword(password){
    var passwordRegex = /^[a-zA-Z0-9]{7,12}$/ 
    return passwordRegex.test(password)
}

password.addEventListener("change",function(){
    if(checkPassword(password.value)){
        passwordError.textContent = " "
        btnLogin.disabled = false;
        btnLogin.style.opacity = "1"
    }
    else{
        passwordError.textContent = "Password Must be of length 7-12"
        passwordError.style.color = "red"
        btnLogin.disabled = true;
        btnLogin.style.opacity = "0.8"
    }
})