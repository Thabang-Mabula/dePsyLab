import { Observable } from 'rxjs';
import { DecisionMatrix } from '../entities/decision-matrix';

export abstract class DecisionMatrixAbstractService {
  abstract updateDecisionMatrix(
    decisionMatrix: DecisionMatrix
  ): Observable<any>;
  abstract getDecisionMatrix(
    decisionMatrixId: number
  ): Observable<DecisionMatrix>;
  abstract generateNewItemId(): string;
}
