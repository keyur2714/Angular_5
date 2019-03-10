import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
const routes : Routes= [
     {
         path : '' , component : EmployeeListComponent,
         children : [
           {
             path: 'employee-detail/:id' , component : EmployeeDetailComponent
           },
           {path : 'employee-entry' , component : EmployeeEntryComponent}
         ]
     }    
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports :[RouterModule]
})
export class EmployeeRoutingModule{
      constructor(){
        console.log("Employee Routing Module Loaded...");
      }
}