import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  headerList: string[] = ["Name","City","Mobile No"];
  columnNameList: string[] = ["name","city","mobileNo"];
  customerList: Customer[] = [];

  constructor() { }

  ngOnInit() {
    let customer1 = new Customer(1,'keyur','surat','7387029671');
    let customer2 = new Customer(2,'denish','mumbai','7387029621');
    let customer3 = new Customer(3,'vinit','surat','7387029623');

    this.customerList.push(customer1);
    this.customerList.push(customer2);
    this.customerList.push(customer3);
  }

}
