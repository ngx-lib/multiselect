import { Pipe, PipeTransform } from '@angular/core';

const DOTS = ' ...';

@Pipe({
  name: 'displaySelectedValue',
  pure: false
})
export class DisplaySelectedValuePipe implements PipeTransform {

  transform(value: any, maxLabelCount: number = 3): any {
    if (value instanceof Array) {
      let collection = [...value]
      let condn = collection.length > maxLabelCount;
      condn ? collection.length = maxLabelCount: null;
      
      return `${collection.map(v => v.name).join(', ')}${condn ? DOTS: ''}`;
    }
    return value && value.name;
  }

}