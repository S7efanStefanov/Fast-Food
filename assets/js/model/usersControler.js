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
            this.activeUser;      
        }
        validateLoginUser(nickName, pass){
            let user = this.users.filter(userIter => {
                user.username === nickName && user.password === pass
            })[0]
            if (user){
                this.activeUser = new ActiveUser(nickName, pass , user.history)
                return true
            }else{
                return false
            }
        }
    }
})()