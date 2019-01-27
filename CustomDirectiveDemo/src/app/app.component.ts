import { Component, ViewChild } from '@angular/core';
import { FormateDirective } from './formate.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirectiveDemo';
  size : string = '2  5px';
  selectedColor: string = '-1';
  colors: string[] = ["red","green","blue"];

  @ViewChild(FormateDirective)
  formateDirective:FormateDirective;

  changeColor(){
    this.formateDirective.changeColor(this.selectedColor);
  }
}
