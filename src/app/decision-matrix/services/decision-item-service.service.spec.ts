/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DecisionItemServiceService } from './decision-item-service.service';

describe('Service: DecisionItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecisionItemServiceService],
    });
  });

  it('should ...', inject(
    [DecisionItemServiceService],
    (service: DecisionItemServiceService) => {}
  ));
});
