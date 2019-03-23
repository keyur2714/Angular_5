import { Component, OnInit } from '@angular/core';
import { Task } from '../task-model';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskServiceService]
})
export class TaskComponent implements OnInit {

  taskList : Task[] = [];

  constructor(private taskService : TaskServiceService) { }

  ngOnInit() {
     this.taskService.getTaskListAsObservable().subscribe(
       (taskList : Task[])=>{
        this.taskList = taskList;
       }
     )
     this.taskService.getTaskNameList().toPromise().then(
       (names)=>{
         for(let name of names){
           console.log(name+ "=======llll");
         }
       }
     )
  }

}
