import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  total: number = 0;
  per: number = 0;
  grade: string = '';

  constructor() { }

  ngOnInit() {
  }

  setTotal(total:string):void{
    console.log(total);
    this.total = parseInt(total);
  }

  calcPer(total:string):void{
    let per = parseInt(total/6);
    this.per = per;
    if(per >= 70)
      this.grade = 'D';
    else if(per >= 60)
      this.grade = 'F';
    else if(per >= 50)
      this.grade = 'S';
    else if(per >= 40)
      this.grade = 'P';
    else
      this.grade = 'FAIL';
  }
}
