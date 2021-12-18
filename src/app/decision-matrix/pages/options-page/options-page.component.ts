import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { ParamEnum } from '../../constants/param-enum.enum';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.css'],
})
export class OptionsPageComponent implements OnInit {
  private _decisionMatrix: DecisionMatrix = new DecisionMatrix();
  private _title: string = '';

  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      let decisionMatrixId = params[ParamEnum.DECISION_MATRIX_ID];
      this.decisionMatrixService
        .getDecisionMatrix(decisionMatrixId)
        .subscribe((decisionMatrix) => {
          this._decisionMatrix = decisionMatrix;
        });
    });
  }

  ngOnInit(): void {}

  submit(): void {
    this._decisionMatrix.title = this._title;
    this.decisionMatrixService
      .updateDecisionMatrix(this._decisionMatrix)
      .subscribe((res) => {
        this.navigateNext(this.generateNextURL(this._decisionMatrix.id!));
      });
  }

  private navigateNext(url: string): void {
    this.router.navigateByUrl(url);
  }

  private generateNextURL(id: string): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${DecisionMatrixRoutesEnum.OPTIONS}?id=${id}`;
  }
}
