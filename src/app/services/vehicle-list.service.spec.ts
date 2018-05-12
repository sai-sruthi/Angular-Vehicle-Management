/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleListService } from './vehicle-list.service';

describe('VehicleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleListService]
    });
  });

  it('should ...', inject([VehicleListService], (service: VehicleListService) => {
    expect(service).toBeTruthy();
  }));
});
