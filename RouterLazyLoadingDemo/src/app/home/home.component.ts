import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  empList():void{
    this.router.navigate(['/employee-list']);
  }

  addEmployee():void{
    this.router.navigate(['/employee-entry']);
  }
  

}
