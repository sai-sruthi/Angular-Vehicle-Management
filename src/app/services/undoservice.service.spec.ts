/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UndoserviceService } from './undoservice.service';

describe('UndoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UndoserviceService]
    });
  });

  it('should ...', inject([UndoserviceService], (service: UndoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
