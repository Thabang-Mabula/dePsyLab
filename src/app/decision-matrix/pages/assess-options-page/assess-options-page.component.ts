import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { DecisionMatrixServiceHelper } from '../../utils/decision-matrix-service-helper';
import { Option } from '../../entities/option';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { DefaultDataTypeValueEnum } from '../../../common-items/constants/default-data-type-value-enum.enum';

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
    this.saveProgress();
    if (!this.isLastOption()) this._optionIndex++;
  }

  goToPreviousOption() {
    this.saveProgress();
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

  submit() {
    this.decisionMatrixService
      .updateDecisionMatrix(this.decisionMatrix)
      .subscribe((res) => {
        this.navigateNext(this.generateNextURL(this.decisionMatrix.id!));
      });
  }

  private navigateNext(url: string): void {
    this.router.navigateByUrl(url);
  }

  // TODO Create a util that does this for you
  private generateNextURL(id: string): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${DecisionMatrixRoutesEnum.RESULTS}?id=${id}`;
  }

  private saveProgress(): void {
    // trigger save event
  }
}
