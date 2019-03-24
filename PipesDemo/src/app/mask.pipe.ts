import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, maskChar?: string,numberOfMaskChar?:number): any {
    console.log(value);
    console.log(value.length);
    console.log(maskChar);
    console.log(numberOfMaskChar);
    if(value.length == 10){
      let unMaskChar = value.substring(0,10-numberOfMaskChar);
      let maskStr = '';
      for(var i=1;i<=numberOfMaskChar;i++){
        maskStr = maskStr + maskChar;
      }    
      return unMaskChar+maskStr;
    }    
    return null;
  }

}
