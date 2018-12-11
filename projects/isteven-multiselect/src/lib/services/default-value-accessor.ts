import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';

import { IstevenMultiselectComponent } from '../isteven-multiselect.component';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IstevenMultiselectComponent),
  multi: true
}
