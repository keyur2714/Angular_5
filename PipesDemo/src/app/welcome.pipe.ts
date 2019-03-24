import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    return "Welcome "+value;
  }

}
