import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LookupModel } from '../model/lookup.model';


@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input()
  dataList : LookupModel[] = [];

  selectedLookup: LookupModel = {id : 2,code : 'US', desc : 'United States'}; 

  @Output()
  getSelectedValue = new EventEmitter<LookupModel>();
  constructor() { }

  ngOnInit() {
    console.log(this.dataList);
    //this.selectedValue = -1;
    this.selectedLookup = this.dataList[1];
  }

  getValue():void{
    console.log(this.selectedLookup);
    console.log(JSON.stringify(this.selectedLookup));
    this.getSelectedValue.emit(this.selectedLookup);
  }
}
