import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Criterion } from '../entities/criterion';
import { DecisionMatrix } from '../entities/decision-matrix';
import { RankedOption } from '../entities/ranked-option';
import { DecisionMatrixAbstractService } from './decision-matrix-abstract-service';
import { DecisionMatrixServiceInterface } from './decision-matrix-service-interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Implementation of {@link DecisionMatrixAbstractService}
 */
export class DecisionMatrixService implements DecisionMatrixAbstractService {
  constructor() {}
  getOptionRankings(decisionId: string): Observable<RankedOption[]> {
    throw new Error('Method not implemented.');
  }
  saveCriteria: Subject<any> = new Subject<any>();

  updateCriteria(
    decisionId: string,
    optionId: number,
    criteria: Criterion[]
  ): Observable<any> {
    throw new Error('Method not implemented.');
  }
  retrieveCriteria(
    decisionId: string,
    optionId: number
  ): Observable<Criterion[]> {
    throw new Error('Method not implemented.');
  }
  updateDecisionMatrix(decisionMatrix: DecisionMatrix): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getDecisionMatrix(decisionMatrixId: number): Observable<DecisionMatrix> {
    throw new Error('Method not implemented.');
  }
  generateNewItemId(): string {
    return '';
  }
}
