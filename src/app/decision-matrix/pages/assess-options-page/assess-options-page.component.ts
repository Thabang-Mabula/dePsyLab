import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { DecisionMatrixServiceHelper } from '../../utils/decision-matrix-service-helper';
import { Option } from '../../entities/option';

@Component({
  selector: 'assess-options-page',
  templateUrl: './assess-options-page.component.html',
  styleUrls: ['./assess-options-page.component.css'],
})
export class AssessOptionsPageComponent implements OnInit {
  private _decisionMatrix = new DecisionMatrix();
  private _optionIndex: number = 0;

  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    DecisionMatrixServiceHelper.obtainDecisionMatrixFromRoute(
      this.activatedRoute,
      this.decisionMatrixService
    ).subscribe((decisionMatrix: DecisionMatrix) => {
      this.decisionMatrix = decisionMatrix;
    });
  }

  get decisionMatrix(): DecisionMatrix {
    return this._decisionMatrix;
  }

  set decisionMatrix(decisionMatrix: DecisionMatrix) {
    this._decisionMatrix = decisionMatrix;
  }

  get currentOption(): Option {
    return this.decisionMatrix.options[this._optionIndex];
  }

  goToNextOption() {
    if (!this.isLastOption()) this._optionIndex++;
  }

  goToPreviousOption() {
    if (!this.isFirstOption()) this._optionIndex--;
  }

  isFirstOption() {
    return this._optionIndex == 0;
  }

  isLastOption() {
    return (
      this._optionIndex == this._decisionMatrix.options.length - 1 ||
      this._decisionMatrix.options.length == 0
    );
  }
}
