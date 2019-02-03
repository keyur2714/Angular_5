import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  product : Product = new Product();
  isSubmited : boolean = false;

  productCategoryList = [
    {
      code : 'ELC',
      desc : 'Electronics'
    },
    {
      code : 'CLOTH',
      desc : 'Clothing'
    },
    {
      code : 'FWARE',
      desc : 'Foot ware'
    }
];

  constructor() { }

  ngOnInit() {
    this.product.category = 'FWARE';  
    this.product.type = 'new';
    this.product.warranty = true;
  }

  save(frm):void{
    console.log(frm); 
    console.log(frm.value);
    console.log(frm.valid);
    if(frm.valid){
      this.isSubmited = true;
      console.log("====="+frm.controls['code'].value); 
      console.log("====="+this.product.code); 
    }
      
  }
}
