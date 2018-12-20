import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = 'First Demo';
  firstName: string = 'keyur';

  constructor(){
    console.log("App Component Object Created...!");
  }
}
