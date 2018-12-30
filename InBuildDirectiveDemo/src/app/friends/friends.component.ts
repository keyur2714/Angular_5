import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList : string [] =["keyur","denish","vinit"];
  selectedFriendName : string = '';


  constructor() { }

  ngOnInit() {
    this.friendsList.push("ravi");
    this.friendsList.push("hiren");
  }

  setSelected(name:string):void{
    this.selectedFriendName = name;
  }
}
