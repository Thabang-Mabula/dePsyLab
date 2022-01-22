import { Observable, Subject } from 'rxjs';
import { Criterion } from '../entities/criterion';
import { DecisionMatrix } from '../entities/decision-matrix';
import { RankedOption } from '../entities/ranked-option';

export abstract class DecisionMatrixAbstractService {
  saveCriteria: Subject<any> = new Subject<any>();

  abstract updateDecisionMatrix(
    decisionMatrix: DecisionMatrix
  ): Observable<any>;
  abstract getDecisionMatrix(
    decisionMatrixId: number
  ): Observable<DecisionMatrix>;
  abstract generateNewItemId(): string;

  abstract retrieveCriteria(
    decisionId: string,
    optionId: number
  ): Observable<Array<Criterion>>;

  abstract updateCriteria(
    decisionId: string,
    optionId: number,
    criteria: Array<Criterion>
  ): Observable<any>;

  abstract getOptionRankings(decisionId: string): Observable<Array<RankedOption>>;
}
