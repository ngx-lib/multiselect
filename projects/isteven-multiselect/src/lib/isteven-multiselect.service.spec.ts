import { TestBed, inject } from '@angular/core/testing';

import { IstevenMultiselectService } from './isteven-multiselect.service';

describe('IstevenMultiselectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IstevenMultiselectService]
    });
  });

  it('should be created', inject([IstevenMultiselectService], (service: IstevenMultiselectService) => {
    expect(service).toBeTruthy();
  }));
});
