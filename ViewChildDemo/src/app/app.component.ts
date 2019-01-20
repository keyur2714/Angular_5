import { Component, ElementRef, ViewChild } from '@angular/core';
import { StringUtilComponent } from './string-util/string-util.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChildDemo';
  nm : string = '';

  @ViewChild("name")
  name : ElementRef;

  @ViewChild("result")
  res : ElementRef;

  @ViewChild("msg")
  message: ElementRef;

  @ViewChild(StringUtilComponent)
  stringUtilComponent: StringUtilComponent;//= new StringUtilComponent();

  save(){
    console.log(this.name.nativeElement);
    console.log(this.name.nativeElement.value);
    this.nm = this.name.nativeElement.value;
    console.log(this.res.nativeElement.innerHTML);
    this.name.nativeElement.value = 'vinit';
    this.name.nativeElement.style.color = 'red';
    console.log(this.message.nativeElement.innerHTML);    
  }

  upperCase(){
    this.res.nativeElement.innerHTML = this.stringUtilComponent.upperCase(this.name.nativeElement.value);
  }
  lowerCase(){
    this.res.nativeElement.innerHTML = this.stringUtilComponent.lowerCase(this.name.nativeElement.value);
  }
  reverse(){
    this.res.nativeElement.innerHTML = this.stringUtilComponent.reverse(this.name.nativeElement.value);
  }
}
