let userController = (function(){
    class User{
        constructor(username, password, history){
            this.username = username;
            this.password = password;
            this.history = []
            
        }
    }
    class UserManager{
        constructor(){
            this.users = [];   
            this.activeUser = {};      
        }
        validateLoginUser(nickName, pass){
            let historytable = document.getElementById('history-table')

            this.users.forEach(userIter => {
                if(userIter.username === nickName && userIter.password === pass){
                    this.activeUser = userIter
                    this.activeUser.history.forEach(order => {
                        painter.drawHistoryTable(historytable, order)
                    })
                }
            })
            if(!this.activeUser.username){
                return false
            }else{
                return true
            }
        }
        registerNewUser(nickName, pass){
            if (this.users.some(user => user.username === nickName)){
                return false
            }else{
                this.users.push(new User(nickName, pass))
                window.localStorage.setItem('users', JSON.stringify(this.users))
                location.hash = 'login'
                return true
            }
        }
        getUsersData() {
           if(window.localStorage.getItem('users')){
            this.users = JSON.parse(window.localStorage.getItem('users'))
           }else{
            window.localStorage.setItem('users', JSON.stringify([]))
           }
        }
    }
    return new UserManager()
})()