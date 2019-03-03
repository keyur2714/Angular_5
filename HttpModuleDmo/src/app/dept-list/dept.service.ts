import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Department } from './dept.model';

@Injectable()
export class DepartmentService{

    APIUrl = 'http://localhost:3000/department';

    constructor(private http:HttpClient){}

    getDeptList():Observable<Department[]>{
        return this.http.get<Department[]>(this.APIUrl);
    }

    saveDept(department: Department):Observable<Department>{
        return this.http.post<Department>(this.APIUrl,department);
    }

    updateDept(department: Department):Observable<Department>{
        return this.http.put<Department>(this.APIUrl+"/"+department.id,department);
    }

    getDeptById(id:number):Observable<Department>{
        return this.http.get<Department>(this.APIUrl+"/"+id);
    }

    deleteDeptById(id:number):Observable<Department>{
        return this.http.delete<Department>(this.APIUrl+"/"+id);
    }

}