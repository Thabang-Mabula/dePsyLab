import { Injectable } from '@angular/core';
import { MockEnum } from '../constants/mock-enum.enum';
import { DecisionMatrixAbstractService } from './decision-matrix-abstract-service';
import { DecisionMatrixServiceInterface } from './decision-matrix-service-interface';

@Injectable({
  providedIn: 'root',
})
export class MockDecisionMatrixService
  implements DecisionMatrixAbstractService
{
  constructor() {}

  /**
   * Genrates a new item ID
   *
   * @returns string New item ID
   */
  generateNewItemId(): string {
    return MockEnum.NEW_ITEM_ID;
  }
}
