import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  totalMarks : number = 375;
  totalSubject : number = 6;
  per: number = 0;
  grade: string = '';

  constructor() { }

  ngOnInit() {
  }

  calculatePer():void{
    this.per = this.totalMarks / this.totalSubject;
  }
  calculateGrade():void{
    if(this.per >= 70)
      this.grade = 'D';
    else if(this.per >= 60)
      this.grade = 'F';
    else if(this.per >= 50)
      this.grade = 'S';
    else if(this.per >= 40)
      this.grade = 'P';
    else
      this.grade = 'FAIL';
  }  

}
