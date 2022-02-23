import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ParamEnum } from '../constants/param-enum.enum';
import { DecisionMatrixAbstractService } from '../services/decision-matrix-abstract-service';
import { DecisionMatrix } from '../entities/decision-matrix';

/**
 * Helper class that acts as a facade for commonly-used logic
 * involving the {@link DecisionMatrixAbstractService}
 *
 */
export class DecisionMatrixServiceHelper {
  /**
   * Obtains the {@link DecisionMatrix} object from the {@link DecisionMatrixAbstractService}
   *
   * @param  {ActivatedRoute} activatedRoute Activated route containing the requested route
   * @param  {DecisionMatrixAbstractService} decisionMatrixService The decision matrix serivce
   * @return The decision matrix specified in the route
   */
  static obtainDecisionMatrixFromRoute(
    activatedRoute: ActivatedRoute,
    decisionMatrixService: DecisionMatrixAbstractService
  ): Observable<DecisionMatrix> {
    let decisionMatrixObservable: Observable<DecisionMatrix> =
      new Observable<DecisionMatrix>();

    activatedRoute.queryParams.subscribe((params) => {
      let decisionMatrixId = params[ParamEnum.DECISION_MATRIX_ID];
      decisionMatrixObservable =
        decisionMatrixService.getDecisionMatrix(decisionMatrixId);
    });

    return decisionMatrixObservable;
  }
}
