import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-util',
  template: `Hi <ng-content></ng-content>`,
  styles: []
})
export class StringUtilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reverse(str:string):string{
    return str.split('').reverse().join('');
  }

  upperCase(str: string):string{
    return str.toUpperCase();
  }

  lowerCase(str: string):string{
    return str.toLowerCase();
  }

}
