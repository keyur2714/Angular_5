import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEntryComponent } from './employee/employee-entry/employee-entry.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {path : '' , component : HomeComponent, canActivate : [AuthGuard]},
  {path : 'home' , component : HomeComponent , canActivate : [AuthGuard]},  
  {path : 'aboutus' , component : AboutusComponent, canActivate : [AuthGuard]},
  {path : 'contactus' , component : ContactusComponent, canActivate : [AuthGuard]},
  {path : 'login' , component : LoginComponent},  
  { 
    path:'employee-list',         
    loadChildren: './employee/employee.module#EmployeeModule'
   },
   { 
    path:'employee-entry',         
    loadChildren: './employee/employee.module#EmployeeModule'
   }
  // {path : 'employee-detail/:id' , component : EmployeeDetailComponent},
  // {path : 'employee-entry' , component : EmployeeEntryComponent}
  // {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {preloadingStrategy : NoPreloading})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...");
  }
}
