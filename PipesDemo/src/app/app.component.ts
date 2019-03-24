import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesDemo';

  today : Date = new Date();

  numbers : Observable<number> = interval(1000);

  className : string = 'myStyle';

  name : string = 'Keyur Thakor';

  accNumber: string = '5260187381';

  emp = {
    name: 'keyur',
    dept: 'IT',
    salary: 1111
  };

  gradeList : string[] = ["Dist","First","Second","Pass","Fail"];
}
