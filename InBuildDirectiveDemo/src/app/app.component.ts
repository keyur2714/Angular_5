import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InBuildDirectiveDemo';  
  cssClassName : string = '';
  msg: string ='';
  age:number = 0;
  checkEligibility(age):void{
    console.log(parseInt(age)+3);
    this.age = parseInt(age);
    if(parseInt(age) >= 18){
      this.cssClassName = 'ifCond';
      this.msg = 'You are Eligible for Voting...!';
    }else{
      this.cssClassName = 'elseCond';
      this.msg = 'You are Not Eligible for Voting...!';
    }
  }
}
