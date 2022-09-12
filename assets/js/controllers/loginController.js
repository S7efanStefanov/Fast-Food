(function () {
    let loginForm = document.getElementById('loginForm')
    let loginError = document.getElementById('loginError')
    let registrationOption = document.getElementById('registrtion-option')
    let loginOption = document.getElementById('login-option')
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const {username: {value: nameInput}, password: {value: passInput}} = this.elements
        console.log(nameInput);
        console.log(passInput);
        if (userController.validateLoginUser(nameInput, passInput)){
            loginOption.style.display = 'none'
            registrationOption.style.display = 'none'
            location.hash = 'menu'
        }else{
            loginError.style.visibility = 'visible' 
        }
        this.reset()
    })
})()