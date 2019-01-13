import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCCOutputDemo';
  formattedMsg : string = '';

  getMessage(msg){
    console.log("2");
    console.log(msg);
    this.formattedMsg = msg;
  }
}
