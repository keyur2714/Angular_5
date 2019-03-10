import { NgModule } from '@angular/core';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
    declarations : [
        EmployeeEntryComponent,
        EmployeeDetailComponent,
        EmployeeListComponent
    ],
    imports : [
        CommonModule,
        EmployeeRoutingModule
    ],
    providers: []
})
export class EmployeeModule{
      constructor(){
        console.log("Employee Module Loaded...");
      }
}