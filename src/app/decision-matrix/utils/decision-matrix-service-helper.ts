import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ParamEnum } from '../constants/param-enum.enum';
import { DecisionMatrixAbstractService } from '../services/decision-matrix-abstract-service';
import { DecisionMatrix } from '../entities/decision-matrix';

export class DecisionMatrixServiceHelper {
  static obtainDecisionMatrixFromRoute(
    activatedRoute: ActivatedRoute,
    decisionMatrixService: DecisionMatrixAbstractService
  ): Observable<DecisionMatrix> {
    let decisionMatrixObservable: Observable<DecisionMatrix> = new Observable<DecisionMatrix>();

    activatedRoute.queryParams.subscribe((params) => {
      let decisionMatrixId = params[ParamEnum.DECISION_MATRIX_ID];
      decisionMatrixObservable = decisionMatrixService
        .getDecisionMatrix(decisionMatrixId)
    });

    return decisionMatrixObservable;
  }
}
