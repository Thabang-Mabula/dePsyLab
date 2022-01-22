import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { MockEnum } from '../constants/mock-enum.enum';
import { Criterion } from '../entities/criterion';
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
  private _mockCriteriaTable: Array<MockCriteriaRow> =
    new Array<MockCriteriaRow>();
  private _saveCriteria: Subject<any> = new Subject<any>();
  saveCriteria: Subject<any> = new Subject<any>();

  constructor() {
    this._decisionMatrix = new DecisionMatrix();
    this._decisionMatrix.id = MockEnum.NEW_ITEM_ID;
  }

  updateCriteria(
    decisionId: string,
    optionId: number,
    criteria: Criterion[]
  ): Observable<any> {
    for (let mockCriteriaRow of this._mockCriteriaTable) {
      if (
        mockCriteriaRow.decisionId == decisionId &&
        mockCriteriaRow.optionId == optionId
      ) {
        mockCriteriaRow.criteria = createCopyArray(criteria);
        return of('success');
      }
    }

    this._mockCriteriaTable.push({
      decisionId: decisionId,
      optionId: optionId,
      criteria: createCopyArray(criteria),
    });

    return of('success');
  }

  retrieveCriteria(
    decisionId: string,
    optionId: number
  ): Observable<Array<Criterion>> {
    console.log(
      'Tried to retrieve criteria for decision_id: ' +
        decisionId +
        ' option_id: ' +
        optionId
    );

    for (let mockCriteriaRow of this._mockCriteriaTable) {
      if (
        mockCriteriaRow.decisionId == decisionId &&
        mockCriteriaRow.optionId == optionId
      ) {
        return of(createCopyArray(mockCriteriaRow.criteria));
      }
    }

    // TODO Create a custom exception to be thrown when element cannot be retrieved
    return of(createCopyArray(this._decisionMatrix.criteria));
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

interface MockCriteriaRow {
  decisionId: string;
  optionId: number;
  criteria: Array<Criterion>;
}
// TODO Find a more elegant way of deep cloning
function createCopyArray(criteria: Criterion[]): Criterion[] {
  let returnArray: Criterion[] = new Array<Criterion>();
  for (let criterion of criteria) {
    let newCriterion: Criterion = new Criterion();
    newCriterion.id = criterion.id;
    newCriterion.description = criterion.description;
    newCriterion.score = criterion.score;
    returnArray.push(newCriterion);
  }

  return returnArray;
}
