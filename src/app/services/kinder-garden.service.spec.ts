import { TestBed } from '@angular/core/testing';

import { KinderGardenService } from './kinder-garden.service';

describe('KinderGardenService', () => {
  let service: KinderGardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KinderGardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
