import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/services/logging.service';
import { IQuestion } from 'src/services/IQuestion';
import { SpringQuestion } from 'src/services/SpringQuestion';
import { AngularQuestion } from 'src/services/AngularQuestion';
const CONST_VAR =     
{ 
  provide: IQuestion,
  useClass : AngularQuestion
};
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [
    CONST_VAR
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private loggingService:LoggingService,private iQuestion:IQuestion) { }

  ngOnInit() {
    this.loggingService.logInfo("Exam Component Initialized...");
    this.question = this.iQuestion.askQuestion();
    console.log(CONST_VAR.useClass);
  }

}
