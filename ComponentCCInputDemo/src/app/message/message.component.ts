import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message : string ='Goood Morning...!';

  @Input('messageType')
  msgType : string = 'secondary';

  constructor() { }

  ngOnInit() {
  }

}
