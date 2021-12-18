import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockEnum } from '../constants/mock-enum.enum';
import { DecisionMatrix } from '../entities/decision-matrix';
import { DecisionMatrixAbstractService } from './decision-matrix-abstract-service';
import { DecisionMatrixServiceInterface } from './decision-matrix-service-interface';

@Injectable({
  providedIn: 'root',
})
export class MockDecisionMatrixService
  implements DecisionMatrixAbstractService
{
  private _decisionMatrix: DecisionMatrix;

  constructor() {
    this._decisionMatrix = new DecisionMatrix();
    this._decisionMatrix.id = MockEnum.NEW_ITEM_ID;
  }

  updateDecisionMatrix(decisionMatrix: DecisionMatrix): Observable<any> {
    this._decisionMatrix = decisionMatrix;
    return of({ res: '200' });
  }

  getDecisionMatrix(decisionMatrixId: number): Observable<DecisionMatrix> {
    return of(this._decisionMatrix);
  }

  /**
   * Genrates a new item ID
   *
   * @returns string New item ID
   */
  generateNewItemId(): string {
    return MockEnum.NEW_ITEM_ID;
  }
}
