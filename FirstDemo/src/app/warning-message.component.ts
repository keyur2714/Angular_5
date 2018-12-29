import { Component } from '@angular/core';
@Component({
    selector : 'app-warning-msg',
    template: `<h1>{{msg}}</h1>`,
    styles: ['h1{color: orange;border: 1px solid green;}']
})
export class WarningMessageComponent {
    msg:string = "This is first warning...!";
}