import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appFormate]'
})
export class FormateDirective implements AfterViewInit{

  @Input()
  color: string = 'red';

  @Input()
  fontSize: string = '15px';

  constructor(private elementRef:ElementRef) { 
    console.log("Object Created..."+this.elementRef.nativeElement);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.style.display = 'block';
  }

  changeColor(color:string):void{
    this.elementRef.nativeElement.style.color = color;
  }
}
