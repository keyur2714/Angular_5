import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input()
  name: string = 'name';

  @Input()
  placeHolder: string = 'Select Value'

  @Input()
  dataList: any[] = [];

  @Input()
  propertyName: string = '';

  @Input()
  size: number = 6;
  constructor() { }

  ngOnInit() {
  }

}
