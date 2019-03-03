import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './dept.service';
import { Department } from './dept.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css'],
  providers: [DepartmentService]
})
export class DeptListComponent implements OnInit {

  department : Department = new Department();
  statusCode : number = 0;
  isUpdate : boolean = false;

  deptEntryForm = new FormGroup({
    id : new FormControl('',Validators.required),
    code : new FormControl('',Validators.required),
    desc : new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  deptList: Department[] = [];

  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {
    this.getDeptList();
  }

  getDeptList():void{
    this.departmentService.getDeptList().subscribe(
      (data:Department[])=>{
        console.log(data);  
        this.deptList = data;      
      },
      (error)=>{

      }
    );
  }

  save(){
    console.log(this.deptEntryForm.value);
    this.department = this.deptEntryForm.value;
    this.departmentService.saveDept(this.department).subscribe(
      (data)=>{
        console.log(data);
        this.statusCode = 200;
        this.getDeptList();
      },
      (error)=>{
        this.statusCode = 401;
      }
    )
  }

  update(){
    console.log(this.deptEntryForm.value);
    this.department = this.deptEntryForm.value;
    this.departmentService.updateDept(this.department).subscribe(
      (data)=>{
        console.log(data);
        this.statusCode = 205;
        this.getDeptList();
        this.isUpdate = false;
        this.deptEntryForm.setValue({"id":'',"code":'',"desc":''});
      },
      (error)=>{
        this.statusCode = 401;
      }
    )
  }
  edit(id:number):void{    
    this.isUpdate = true;
    this.departmentService.getDeptById(id).subscribe(
      (data)=>{
        this.deptEntryForm.setValue(data);
      },
      (error)=>{

      }
    )
  }

  delete(id:number):void{
    let confirmMsg = confirm("Are you sure to delete Department?");
    if(confirmMsg){
      this.departmentService.deleteDeptById(id).subscribe(
        (data)=>{
          console.log(data);
          this.statusCode = 204;
          this.getDeptList();
        },
        ()=>{
  
        }
      )
    }    
  }
}
