/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DecisionMatrixService } from './decision-matrix.service';

describe('Service: DecisionMatrixServce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecisionMatrixService]
    });
  });

  it('should ...', inject([DecisionMatrixService], (service: DecisionMatrixService) => {
    expect(service).toBeTruthy();
  }));
});
