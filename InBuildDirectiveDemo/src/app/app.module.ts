import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { MarksheetComponent } from './marksheet/marksheet.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    MarksheetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
