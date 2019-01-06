import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  @Input()
  columnHeaderList : string[] = [];

  @Input()
  columnNameList: string[] = [];

  @Input()
  dataList: any[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
