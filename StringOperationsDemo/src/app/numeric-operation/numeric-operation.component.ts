import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeric-operation',
  templateUrl: './numeric-operation.component.html',
  styleUrls: ['./numeric-operation.component.css']
})
export class NumericOperationComponent implements OnInit {

  number1: number = 10;
  number2: number = 0;
  resultString: string = '';
  constructor() { }

  ngOnInit() {
  }

  plus():void{
    let result:number = this.number1 + this.number2;
    this.resultString = result+'';
  }

  minus():void{
    let result:number = this.number1 - this.number2;
    this.resultString = result+'';
  }

  mul():void{
    let result:number = this.number1 * this.number2;
    this.resultString = result+'';
  }

  div():void{
    if(this.number2 === 0){
      this.resultString = 'Devide By 0 Not Possible';  
    }else{
      let result:number = this.number1 / this.number2;
      this.resultString = result+'';
    }    
  }



}
