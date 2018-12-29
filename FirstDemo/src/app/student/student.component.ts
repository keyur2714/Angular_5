import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentNameList: string[] = ["keyur","denish","vinit","hiren","sachin"];

  constructor() { 
    console.log("StudentComponent Object Created...!");
  }

  ngOnInit() {
    console.log(this.studentNameList.length);
    console.log(this.studentNameList[2].toUpperCase());
    this.studentNameList.push("viren");
    console.log(this.studentNameList.length);
  }

  addNewStudent(name:string):void{
    console.log("Hello...");
    this.studentNameList.push(name);
  }

}
