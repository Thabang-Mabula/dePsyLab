import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DecisionMatrix } from '../entities/decision-matrix';
import { DecisionMatrixAbstractService } from './decision-matrix-abstract-service';
import { DecisionMatrixServiceInterface } from './decision-matrix-service-interface';

@Injectable({
  providedIn: 'root',
})
export class DecisionMatrixService implements DecisionMatrixAbstractService {
  constructor() {}
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
