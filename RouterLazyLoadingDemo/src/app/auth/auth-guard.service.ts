import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private router: Router,private authenticationService: AuthenticationService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log("Inside AuthGaurd...!");
        console.log(state.url);
        this.authenticationService.setSuccessUrl(state.url);
        if(this.authenticationService.getAuthStatus() === false){
            this.router.navigate(['login']);
            return of(false);    
        }   
        return of(true);    
    }   
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        console.log("Inside Child Routes.")
        if(this.authenticationService.getUserRole() === 'admin')
            return of(true);    
        else{
            alert("Sorry but you don't have permission...!");
            return of(false);    
        }    
    }
}