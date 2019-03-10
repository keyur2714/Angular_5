import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  constructor(private location:Location) {
    console.log("Employee Entry Component Loaded...");
   }

  ngOnInit() {
  }

  back():void{
    this.location.back();
  }
}
