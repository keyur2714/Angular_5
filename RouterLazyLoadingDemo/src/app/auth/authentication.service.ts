import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthenticationService{

    isAuthenticated : boolean = false;
    successUrl : string = 'home';
    userRole: string = 'admin';

    constructor(){}

    authenticate(userName:string,password:string):Observable<boolean>{
        if(userName === 'keyur' && password === 'denish'){
            this.isAuthenticated = true;
            this.userRole = 'admin';
        }else if(userName === 'denish' && password === 'keyur'){
            this.isAuthenticated = true;
            this.userRole = 'user';
        }
        return of(this.isAuthenticated);
    }

    getAuthStatus():boolean{
        return this.isAuthenticated;
    }
    setSuccessUrl(successUrl:string){
        this.successUrl = successUrl;
    }
    getSuccessUrl():string{
        return this.successUrl;
    }


    getUserRole():string{
        return this.userRole;
    }
}