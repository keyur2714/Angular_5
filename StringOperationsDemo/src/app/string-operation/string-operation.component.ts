import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-operation',
  templateUrl: './string-operation.component.html',
  styleUrls: ['./string-operation.component.css']
})
export class StringOperationComponent implements OnInit {

  resultString : string = '';

  constructor() { }

  ngOnInit() {
  }

  reverse(value : any):void{
    let revArr = value.split('').reverse().join('');
    this.resultString = revArr;
  }

  convertToUpperCase(value : any):void{
    let upperCaseStr = value.toUpperCase();    
    console.log("UpperCase String is : "+upperCaseStr);
    this.resultString = upperCaseStr;
  }

  convertToLowerCase(value : any):void{
    this.resultString = value.toLowerCase();
  }

}
