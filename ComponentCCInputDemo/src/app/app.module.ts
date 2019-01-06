import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MyGridComponent,
    ItemListComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
