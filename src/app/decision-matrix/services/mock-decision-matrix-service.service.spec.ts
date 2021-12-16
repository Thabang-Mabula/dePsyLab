/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockDecisionMatrixServiceService } from './mock-decision-matrix-service.service';

describe('Service: MockDecisionMatrixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDecisionMatrixServiceService]
    });
  });

  it('should ...', inject([MockDecisionMatrixServiceService], (service: MockDecisionMatrixServiceService) => {
    expect(service).toBeTruthy();
  }));
});
