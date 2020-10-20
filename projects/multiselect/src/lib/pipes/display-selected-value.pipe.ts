import { Pipe, PipeTransform } from '@angular/core';

const DOTS = ' ...';

@Pipe({
  name: 'displaySelectedValue',
  pure: false
})
export class DisplaySelectedValuePipe implements PipeTransform {
  defaultMaxLabelCount: number = 3;
  transform(value: any, maxLabelCount: number = this.defaultMaxLabelCount): any {
    if (value instanceof Array) {

      const collection = [...value];
      var total = collection.length;
      const condn = collection.length > maxLabelCount;
      condn ? (collection.length = maxLabelCount) : null;

      return `${collection.map(v => v.name).join(', ')}${condn ? DOTS + ' ('+total+')' : ''}`;
    }
    return value && value.name;
  }
}
