import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr',
  standalone: true
})
export class SqrPipe implements PipeTransform {

  transform(value:any): unknown {
    // it can be any logic 
      //some time it can cube , sqr , area of circle , rect , polindrom , reverse  
      // and th en u retrun , 
      // or can be project requriemts 
    return value * value;
  }

}
