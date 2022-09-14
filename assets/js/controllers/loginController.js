(function () {
    let loginForm = document.getElementById('loginForm')
    let loginError = document.getElementById('loginError')
    let registrationOption = document.getElementById('registrtion-option')
    let loginOption = document.getElementById('login-option')
    let menuOption = document.getElementById('menu-option')
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const {username: {value: nameInput}, password: {value: passInput}} = this.elements

        if (userController.validateLoginUser(nameInput, passInput)){
            menuOption.style.visibility = 'visible' 
            loginOption.style.display = 'none'
            registrationOption.style.display = 'none'
            location.hash = 'menu'

        }else{
            loginError.style.visibility = 'visible' 
        }
        this.reset()
    })
})()