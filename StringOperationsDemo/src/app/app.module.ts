import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringOperationComponent } from './string-operation/string-operation.component';
import { NumericOperationComponent } from './numeric-operation/numeric-operation.component';
import { MarksheetComponent } from './marksheet/marksheet.component';

@NgModule({
  declarations: [
    AppComponent,
    StringOperationComponent,
    NumericOperationComponent,
    MarksheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
