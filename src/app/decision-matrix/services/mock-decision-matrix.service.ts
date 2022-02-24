import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpResponseEnum } from 'src/app/common-items/constants/http-response-enum.enum';
import { MockEnum } from '../constants/mock-enum.enum';
import { Criterion } from '../entities/criterion';
import { DecisionMatrix } from '../entities/decision-matrix';
import { RankedOption } from '../entities/ranked-option';
import { DecisionMatrixAbstractService } from './decision-matrix-abstract-service';

const DEFAULT_RANKING = 1;

const DEFAULT_SCORE = 0;
@Injectable({
  providedIn: 'root',
})
/**
 * A mock implementation of {@link DecisionMatrixAbstractService}
 */
export class MockDecisionMatrixService
  implements DecisionMatrixAbstractService
{
  private _decisionMatrix: DecisionMatrix;
  private _mockCriteriaTable: Array<MockCriteriaRow> =
    new Array<MockCriteriaRow>();
  private _saveCriteria: Subject<any> = new Subject<any>();
  saveCriteria: Subject<any> = new Subject<any>();

  /**
   * Default constructor
   */
  constructor() {
    this._decisionMatrix = new DecisionMatrix();
    this._decisionMatrix.id = MockEnum.NEW_ITEM_ID;
  }

  getOptionRankings(decisionId: string): Observable<Array<RankedOption>> {
    // Assume the decision ID is for the decision matrix that's in-memory
    let rankedOptions = new Array<RankedOption>();
    for (let option of this._decisionMatrix.options) {
      let score: number = this.calculateCriteriaScore(option.id, decisionId);
      let optionRank: RankedOption = new RankedOption();
      optionRank.score = score;
      optionRank.option = option;
      rankedOptions.push(optionRank);
    }

    if (rankedOptions.length > 0) {
      this.assignRankings(rankedOptions);
    }

    return of(rankedOptions);
  }
  /**
   * Assign rankings to the options based on the cummulative criteria scores.
   *
   * @param  {RankedOption[]} rankedOptions Ranked options
   */
  private assignRankings(rankedOptions: RankedOption[]): void {
    rankedOptions.sort((a: RankedOption, b: RankedOption) => {
      return b.score - a.score;
    });

    let currentScore = rankedOptions[0].score;
    let currentRanking = DEFAULT_RANKING;
    rankedOptions.forEach((rankedOption: RankedOption, index: number) => {
      if (rankedOption.score < currentScore) {
        currentRanking++;
        currentScore = rankedOption.score;
      }

      rankedOption.rank = currentRanking;
    });
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
        return of(HttpResponseEnum.SUCCESS);
      }
    }

    this._mockCriteriaTable.push({
      decisionId: decisionId,
      optionId: optionId,
      criteria: createCopyArray(criteria),
    });

    return of(HttpResponseEnum.SUCCESS);
  }

  retrieveCriteria(
    decisionId: string,
    optionId: number
  ): Observable<Array<Criterion>> {
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
    return of(HttpResponseEnum.SUCCESS);
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

  /**
   * Calculates the cummulative score for an option by summing all the scores
   * for the criteria associated with the option.
   *
   * @param  {number} optionId Option id
   * @param  {string} decisionId Decision id
   * @returns The sum of the criteria scores for the specified option
   */
  private calculateCriteriaScore(optionId: number, decisionId: string): number {
    let score = DEFAULT_SCORE;
    for (let mockCriteriaRow of this._mockCriteriaTable) {
      if (
        mockCriteriaRow.decisionId == decisionId &&
        mockCriteriaRow.optionId == optionId
      ) {
        for (let criterion of mockCriteriaRow.criteria) {
          score += criterion.score;
        }
      }
    }

    return score;
  }
}

/**
 * Interface for a mock row/entry in a data source that hold the criteria for a given option
 */
interface MockCriteriaRow {
  decisionId: string;
  optionId: number;
  criteria: Array<Criterion>;
}

// TODO Find a more generic and elegant way of deep cloning
/**
 * Creates a deep clone/copy of a {@link Criterion} array
 *
 * @param  {Criterion[]} criteria Criteria array
 * @return A deep copy of the array
 */
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
