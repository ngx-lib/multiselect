import { Pipe, PipeTransform } from '@angular/core';
import { MultiselectOption } from '../models/multiselect-option.model';

const DOTS = ' ...';

@Pipe({
  name: 'displaySelectedValue',
  pure: false
})
export class DisplaySelectedValuePipe implements PipeTransform {
  defaultMaxLabelCount: number = 3;
  transform(value: MultiselectOption | MultiselectOption[] | null, maxLabelCount: number = this.defaultMaxLabelCount): string {
    if (value instanceof Array) {
      const collection = [...value];
      var total = collection.length;
      const condn = collection.length > maxLabelCount;
      condn ? (collection.length = maxLabelCount) : null;

      return `${collection.map(v => v.name).join(', ')}${condn ? DOTS + ' (' + total + ')' : ''}`;
    }
    return value?.name as string;
  }
}
