import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductEntryComponent } from './product/product-entry/product-entry.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CustomerEntryComponent } from './customer-entry/customer-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent,
    ProductListComponent,
    CustomerEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
