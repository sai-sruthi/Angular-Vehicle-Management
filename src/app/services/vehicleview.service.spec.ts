/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleviewService } from './vehicleview.service';

describe('VehicleviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleviewService]
    });
  });

  it('should ...', inject([VehicleviewService], (service: VehicleviewService) => {
    expect(service).toBeTruthy();
  }));
});
