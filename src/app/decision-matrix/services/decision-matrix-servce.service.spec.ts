/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DecisionMatrixServceService } from './decision-matrix-servce.service';

describe('Service: DecisionMatrixServce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecisionMatrixServceService]
    });
  });

  it('should ...', inject([DecisionMatrixServceService], (service: DecisionMatrixServceService) => {
    expect(service).toBeTruthy();
  }));
});
