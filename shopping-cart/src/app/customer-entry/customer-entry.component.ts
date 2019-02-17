import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormArray } from '@angular/forms';
import { Customer } from './customer.model';
@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.css']
})
export class CustomerEntryComponent implements OnInit {

  customer = new Customer();

  customerForm = new FormGroup(
    {
      name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]),
      address1 : new FormControl('',Validators.required),
      address2 : new FormControl(''),
      contactNo : new FormControl('',[Validators.required,Validators.minLength(10)]),
      preferedPayement : new FormArray([new FormControl()])
    }
  );

  constructor() { }

  ngOnInit() {
  }

  save():void{
    console.log(this.customerForm);
    console.log(this.customerForm.value);
    console.log(this.customerForm.get('name').value);
    console.log(this.customerForm.controls['name'].value);
    this.customer = this.customerForm.value;        
  }

  updateValidation(){
    this.customerForm.get('name').setValidators(Validators.maxLength(3));
    this.customerForm.get('name').updateValueAndValidity();
  }

  addPaymentOpt(){
    const newFormControl = new FormControl();
    (<FormArray>this.customerForm.get("preferedPayement")).push(newFormControl);
  }
}
