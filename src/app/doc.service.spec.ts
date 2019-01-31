import { TestBed } from '@angular/core/testing';

import { DocService } from './doc.service';

describe('DocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocService = TestBed.get(DocService);
    expect(service).toBeTruthy();
  });
});
