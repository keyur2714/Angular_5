import { Directive,TemplateRef,ViewContainerRef, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective implements AfterViewInit{

  constructor(private templateRef: TemplateRef<any>,private viewContainerRef : ViewContainerRef,private elementRef:ElementRef) {
    console.log("Directive Object Created...");
   }

   ngAfterViewInit(){
      console.log(this.elementRef.nativeElement.innerHTML+" =");
   }

  @Input() set appMyLoop(loopCounter: number){
    console.log(loopCounter);

    for(let i=1;i<=loopCounter;i++){                  
      this.viewContainerRef.createEmbeddedView(this.templateRef);      
    }
  }
}
