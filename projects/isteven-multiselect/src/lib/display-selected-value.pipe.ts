import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displaySelectedValue',
  pure: false
})
export class DisplaySelectedValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value instanceof Array) {
      return value.map(v => v.name).join(', ');
    }
    return value && value.name;
  }

}