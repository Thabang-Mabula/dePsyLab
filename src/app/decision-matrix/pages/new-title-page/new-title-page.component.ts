import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { ParamEnum } from '../../constants/param-enum.enum';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { RoutesEnum } from '../../constants/routes-enum.enum';

@Component({
  selector: 'app-new-title-page',
  templateUrl: './new-title-page.component.html',
  styleUrls: ['./new-title-page.component.css'],
})
export class NewTitlePageComponent implements OnInit {
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

  submitTitle(): void {
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
    return `/${RoutesEnum.CONTEXT_ROOT}/${RoutesEnum.TITLE}?id=${id}`;
  }
}
