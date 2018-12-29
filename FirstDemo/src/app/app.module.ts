import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { FailureMessageComponent } from './failure-message/failure-message.component';
import { WarningMessageComponent } from './warning-message.component';
import { StudentComponent } from './student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FailureMessageComponent,
    WarningMessageComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MessageComponent,AppComponent]
})
export class AppModule { 
}
