import { Component, Input, OnInit } from '@angular/core';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { Option } from '../../entities/option';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'options-display',
  templateUrl: './options-display.component.html',
  styleUrls: ['./options-display.component.css'],
})

// TODO Delete and use the editable list component generalisation
export class OptionsDisplayComponent implements OnInit {
  @Input('decision-matrix') _decisionMatrix: DecisionMatrix | undefined;
  faTrash = faTrash;

  constructor() {}

  ngOnInit() {}

  getOptions(): Array<Option> {
    if (this._decisionMatrix != null || this._decisionMatrix !== undefined)
      return this._decisionMatrix.options;

    return new Array<Option>();
  }

  deleteOption(optionId: number): void {
    this._decisionMatrix!.options = this._decisionMatrix!.options.filter(
      (option: Option) => {
        return option.id != optionId;
      }
    );
  }
}
