(function () {
    console.log(50);
    let loginForm = document.getElementById('loginForm')
    let loginError = document.getElementById('loginError')
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const {username: {value: nameInput}, password: {value: passInput}} = this.elements
        console.log(nameInput);
        console.log(passInput);
        if (userController.validateLoginUser(nameInput, passInput)){
            location.hash = 'menu'
        }else{
            loginError.style.visibility = 'visible' 
        }
        this.reset()
    })
})()