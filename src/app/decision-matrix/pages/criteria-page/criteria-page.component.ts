import { Component, OnInit } from '@angular/core';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { ParamEnum } from '../../constants/param-enum.enum';
import { DecisionMatrix } from '../../entities/decision-matrix';

@Component({
  selector: 'criteria-page',
  templateUrl: './criteria-page.component.html',
  styleUrls: ['./criteria-page.component.css'],
})
export class CriteriaPageComponent implements OnInit {
  criterionDescription: string = '';
  decisionMatrix: DecisionMatrix = new DecisionMatrix();

  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // TODO generalise this into a common method in a util and re-use instead of copy/pasting
    // TODO move this code to the ngOnInit everywhere
    this.activatedRoute.queryParams.subscribe((params) => {
      let decisionMatrixId = params[ParamEnum.DECISION_MATRIX_ID];
      this.decisionMatrixService
        .getDecisionMatrix(decisionMatrixId)
        .subscribe((decisionMatrix) => {
          this.decisionMatrix = decisionMatrix;
        });
    });
  }

  ngOnInit() {}

  submit() {
    this.navigateNext(this.generateNextURL(this.decisionMatrix.id!));
  }

  addCriterion() {
    this.decisionMatrix.addCriterion(this.criterionDescription);
    console.log('Existing criteria: ' + this.decisionMatrix.criteria);
  }

  private navigateNext(url: string): void {
    this.router.navigateByUrl(url);
  }

  private generateNextURL(id: string): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${DecisionMatrixRoutesEnum.OPTIONS}?id=${id}`;
  }
}
