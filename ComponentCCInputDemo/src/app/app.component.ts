import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCCInputDemo';
  messageType : string = 'info';

  countryList = [
    {
      "id":1,
      "code":"IND",
      "desc":"India"
    },
    {
      "id":2,
      "code":"US",
      "desc":"United States"
    },
    {
      "id":3,
      "code":"UK",
      "desc":"United Kingdom"
    }
  ];

}
