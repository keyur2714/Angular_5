import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  empId: number = 0;

  constructor(private activatedRoute :ActivatedRoute,private location:Location) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (param)=>{
    //     console.log(param);
    //     this.empId = param.id;
    //   }
    // )

    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        console.log(paramMap.get('id'));
        this.empId = parseInt(paramMap.get('id'));
      }
    )

    // this.activatedRoute.queryParams.subscribe(
    //   (queryParams)=>{
    //     console.log(queryParams.name+" "+queryParams.city);
    //   }
    // )
    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        console.log(queryParamMap.get('name')+" "+queryParamMap.get('city'));
      }
    )

  }

  back():void{
    this.location.back();
  }

}
