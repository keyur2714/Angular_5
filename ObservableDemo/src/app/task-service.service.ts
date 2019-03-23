import { Injectable } from '@angular/core';
import { Task } from './task-model';
import { Observable, of } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  getTaskList(): Task[]{

    let task1 = new Task();
    task1.id = 1;
    task1.taskDesc = 'Task 1';
    task1.estimation = 2;

    let task2 = new Task();
    task2.id = 2;
    task2.taskDesc = 'Task 2';
    task2.estimation = 2;

    let task3 = new Task();
    task3.id = 3;
    task3.taskDesc = 'Task 3';
    task3.estimation = 3;

    let taskList: Task[] = [];
    taskList.push(task1);
    taskList.push(task2);
    taskList.push(task3);

    return taskList;
  }

  getTaskListAsObservable():Observable<Task[]>{
    return of(this.getTaskList());
  }

  getTaskNameList():Observable<string[]>{

    of(1,2,3).pipe(
      map(x => x + 1),
      filter(x => x > 2)
    ).subscribe(
      (data)=>{
        alert(data);
      }
    );
    

    let taskNames: string[] = [];
    return this.getTaskListAsObservable().pipe(      
      map(
        (taskList)=>{
          for(let task of taskList){
            taskNames.push(task.taskDesc.toUpperCase());
          }
          return taskNames;
        }
      ),      
      filter((t)=>{
          console.log(t);
          return 1 > 0;
        }        
      ),
      catchError(
        (error)=>{
          return of(error);
        }
      )
    );   

  }
}
