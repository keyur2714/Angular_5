import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authStatus: boolean = false;

  constructor(private router : Router,private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  authenticate():void{
    this.authenticationService.authenticate('keyur','denish').subscribe(
      (status)=>{
        this.authStatus = status;
        if(this.authStatus){
          this.router.navigate([this.authenticationService.getSuccessUrl()]);
        }else{
          this.router.navigate(['login']);
        }
      }
    )
    
    
  }
}
