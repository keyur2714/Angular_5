import { Component, OnInit } from '@angular/core';


import { LookupModel } from './model/lookup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ComponentCCOutputDemo';
  formattedMsg : string = '';

  countryList: LookupModel[] = [];

  selectedCountry = new LookupModel();

  ngOnInit(){
    let country1 = new LookupModel();
    country1.id = 1;
    country1.code = 'IND';
    country1.desc = 'India';

    let country2 = new LookupModel();
    country2.id = 2;
    country2.code = 'US';
    country2.desc = 'United States';

    let country3 = new LookupModel();
    country3.id = 3;
    country3.code = 'UK';
    country3.desc = 'United Kingdom';
    this.countryList.push(country1);
    this.countryList.push(country2);
    this.countryList.push(country3);
  
  }

  getMessage(msg){
    console.log("2");
    console.log(msg);
    this.formattedMsg = msg;
  }

  getCountry(country){
    console.log(2);
    this.selectedCountry = country;
  }
}
