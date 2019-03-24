import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === 'DIST'){
      value = 'D';
    }else if(value === 'FIRST'){
      value = 'F';
    }else if(value === 'SECOND'){
      value = 'S';
    }else if(value === 'PASS'){
      value = 'P';
    }else {
      value = 'FAIL';
    }
    return value;
  }

}
