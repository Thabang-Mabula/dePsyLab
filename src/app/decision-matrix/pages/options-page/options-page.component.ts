import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { ParamEnum } from '../../constants/param-enum.enum';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { DefaultDataTypeValueEnum } from '../../../common-items/constants/default-data-type-value-enum.enum';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.css'],
})
export class OptionsPageComponent implements OnInit {
  decisionMatrix: DecisionMatrix = new DecisionMatrix();
  optionDescription: string = DefaultDataTypeValueEnum.STRING;

  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // TODO generalise this into a common method in a util and re-use instead of copy/pasting
    this.activatedRoute.queryParams.subscribe((params) => {
      let decisionMatrixId = params[ParamEnum.DECISION_MATRIX_ID];
      this.decisionMatrixService
        .getDecisionMatrix(decisionMatrixId)
        .subscribe((decisionMatrix) => {
          this.decisionMatrix = decisionMatrix;
        });
    });
  }

  ngOnInit(): void {}

  submit(): void {
    // this._decisionMatrix.title = this._title;
    // this.decisionMatrixService
    //   .updateDecisionMatrix(this._decisionMatrix)
    //   .subscribe((res) => {
    //     this.navigateNext(this.generateNextURL(this._decisionMatrix.id!));
    //   });
  }

  addOption() {
    if (
      this.optionDescription != null &&
      this.optionDescription != undefined &&
      this.optionDescription.trim() !== ''
    ) {
      this.decisionMatrix?.addOption(this.optionDescription.trim());
    }
  }
}
