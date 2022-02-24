import { Observable, Subject } from 'rxjs';
import { Criterion } from '../entities/criterion';
import { DecisionMatrix } from '../entities/decision-matrix';
import { RankedOption } from '../entities/ranked-option';

/**
 * Abstract base class for the Decision Matrix Service
 */
export abstract class DecisionMatrixAbstractService {
  saveCriteria: Subject<any> = new Subject<any>();

  /**
   * Updates a given decision matrix
   *
   * @param  {DecisionMatrix} decisionMatrix Decision matrix
   * @returns Observable that resolves a service response
   */
  abstract updateDecisionMatrix(
    decisionMatrix: DecisionMatrix
  ): Observable<any>;

  /**
   * Get a decision matrix for a given id
   *
   * @param  {number} decisionMatrixId Decision matrix id
   * @returns Observable that resolves a decision matrix
   */
  abstract getDecisionMatrix(
    decisionMatrixId: number
  ): Observable<DecisionMatrix>;

  /**
   * Generate and retrieve a new decision matrix id
   *
   * @returns New decision matrix id
   */
  abstract generateNewItemId(): string;

  /**
   * Retrieves the scored criteria for a given option
   *
   * @param  {string} decisionId Decision matrix id
   * @param  {number} optionId Option id
   * @returns Observable that resolves an array of criteria
   */
  abstract retrieveCriteria(
    decisionId: string,
    optionId: number
  ): Observable<Array<Criterion>>;

  /**
   * Update the criteria
   *
   * @param  {string} decisionId Decision matrix id
   * @param  {number} optionId Option id
   * @param  {Array<Criterion>} criteria Criteria to update
   * @returns Observable that resolves a service response
   */
  abstract updateCriteria(
    decisionId: string,
    optionId: number,
    criteria: Array<Criterion>
  ): Observable<any>;

  /**
   * Get option rankings
   *
   * @param  {string} decisionId Decision matrix id
   * @returns Observable array of ranked options
   */
  abstract getOptionRankings(
    decisionId: string
  ): Observable<Array<RankedOption>>;
}
