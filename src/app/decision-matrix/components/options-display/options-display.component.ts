import { Component, Input, OnInit } from '@angular/core';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { Option } from '../../entities/option';

@Component({
  selector: 'options-display',
  templateUrl: './options-display.component.html',
  styleUrls: ['./options-display.component.css'],
})
export class OptionsDisplayComponent implements OnInit {
  @Input('decision-matrix') _decisionMatrix: DecisionMatrix | undefined;

  constructor() {}

  ngOnInit() {}

  getOptions(): Array<Option> {
    if (this._decisionMatrix != null || this._decisionMatrix !== undefined)
      return this._decisionMatrix.options;

    return new Array<Option>();
  }
}
