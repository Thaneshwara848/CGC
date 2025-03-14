import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuber',
  standalone: true
})
export class CuberPipe implements PipeTransform {

  transform(value:any): unknown {
    return value * value * value;
  }

}
