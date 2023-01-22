export class AuthService{

    loggedIn:boolean  = false;


    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });
        return promise;      
    }

    login(email: any, pwd: any) {

        console.log('EmailRec', email);
        console.log('PasswdRec', pwd);
        
        if (email.value === 'test@gmail.com' && pwd.value === '12345') {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    }
    logout() {
        this.loggedIn = false;
    }
}