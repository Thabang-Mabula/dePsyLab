/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockDecisionMatrixService } from './mock-decision-matrix.service';

describe('Service: MockDecisionMatrixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDecisionMatrixService]
    });
  });

  it('should ...', inject([MockDecisionMatrixService], (service: MockDecisionMatrixService) => {
    expect(service).toBeTruthy();
  }));
});
