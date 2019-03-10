import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private router:Router) { 
    console.log('Inside Employee List Component...!');
  }

  ngOnInit() {
  }


  addEmployee():void{
    this.router.navigate(['employee-entry']);
  }
}
