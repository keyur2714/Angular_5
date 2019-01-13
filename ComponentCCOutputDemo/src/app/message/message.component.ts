import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message : string = '';

  @Output()
  getFormattedMessage = new EventEmitter<string>();

  constructor() {
    console.log("0");
   }

  ngOnInit() {
    console.log("1");
    this.getFormattedMessage.emit("<b>"+this.message+"</b>");
  }

}
