import { TestBed } from '@angular/core/testing';

import { LoadPropertysService } from './load-propertys.service';

describe('LoadPropertysService', () => {
  let service: LoadPropertysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPropertysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
