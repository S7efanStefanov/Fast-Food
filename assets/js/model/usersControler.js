let userController = (function(){
    class User{
        constructor(username, password){
            this.username = username;
            this.password = password;
            this.history = {}
        }
    }
    class ActiveUser extends User{
        constructor(username, password, history){
            super(username, password, history);
            
        }
    }
    class UserManager{
        constructor(){
            this.users = [];   
            this.activeUser = {};      
        }
        validateLoginUser(nickName, pass){
            let user = this.users.filter(userIter => {
                return userIter.username === nickName && userIter.password === pass
            })[0]
            if (user){
                this.activeUser = new ActiveUser(nickName, pass , user.history)
                return true
            }else{
                return false
            }
        }
        registerNewUser(nickName, pass){
            if (this.users.some(user => user.username === nickName)){
                return false
            }else{
                this.users.push(new User(nickName, pass))
                location.hash = 'login'
                return true
            }
        }
    }
    return new UserManager()
})()