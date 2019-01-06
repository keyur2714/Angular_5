import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  headerList: string[] = ["Id","Code","Desc","Price"];
  columnNameList: string[] = ["id","code","description","unitPrice"];
  itemList : Item[] = [];

  constructor() { }

  ngOnInit() {

    let item1 = new Item();
    item1.id = 10;
    item1.code = 'TEA';
    item1.description = 'Ginger Massala Tea';
    item1.unitPrice = 12;

    let item2 = new Item();
    item2.id = 20;
    item2.code = 'COFFEE';
    item2.description = 'Black Coffee';
    item2.unitPrice = 25;
    
    let item3 = new Item();
    item3.id = 30;
    item3.code = 'CCOFFEE';
    item3.description = 'Cold Coffee';
    item3.unitPrice = 30;

    this.itemList.push(item1);
    this.itemList.push(item2);
    this.itemList.push(item3);
  }

}
