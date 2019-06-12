import { TestBed } from '@angular/core/testing';

import { SendCityService } from './send-city.service';

describe('SendCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendCityService = TestBed.get(SendCityService);
    expect(service).toBeTruthy();
  });
});
