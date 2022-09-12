(function () {
    let registerForm = document.getElementById('registerForm');
    let registerName = document.getElementById('registerName');
    let registrationPass = document.getElementById('regPass');
    let confirmedPass = document.getElementById('confirmPass');
    let regButton = document.getElementById('register-button')

    registrationPass.addEventListener('input', function(){
        if (registrationPass.value !== confirmedPass.value){
            regButton.disabled = true
        }else{
            regButton.disabled = false
        }
    })
    confirmedPass.addEventListener('input', function(){
        if (registrationPass.value !== confirmedPass.value){
            regButton.disabled = true
        }else{
            regButton.disabled = false
        }
    })


    registerForm.addEventListener('submit', function(event){
        event.preventDefault();
        const {username: {value: username},password: {value: registerPass}, confirmPassword: {value: confirmPassword}} = this.elements
        userController.registerNewUser(username, registerPass)
        console.log(userController.users);
        this.reset()
    })

})()