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
  private _optionIterator: Iterator<Option> | null = null;
  private _currentOption: Option = new Option();
  private _hasNextOption: boolean = true;

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
      this._optionIterator = this.decisionMatrix.options[Symbol.iterator]();
      this.setNextOption();
    });
  }

  get decisionMatrix(): DecisionMatrix {
    return this._decisionMatrix;
  }

  set decisionMatrix(decisionMatrix: DecisionMatrix) {
    this._decisionMatrix = decisionMatrix;
  }

  get currentOption(): Option {
    return this._currentOption;
  }

  set currentOption(option: Option) {
    this._currentOption = option;
  }

  get hasNextOption(): boolean {
    return this._hasNextOption;
  }

  set hasNextOption(hasNext: boolean) {
    this._hasNextOption = hasNext;
  }

  private setNextOption(): void {
    let next = this._optionIterator!.next();
    if (!next!.done) {
      this.currentOption = next!.value;
    } else {
      this.hasNextOption = false;
    }
  }

  loadNextOption(): void {
    if (this.hasNextOption) {
      this.setNextOption();
    }
  }
}
