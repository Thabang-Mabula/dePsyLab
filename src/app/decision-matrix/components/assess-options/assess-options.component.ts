import { Component, Input, OnInit } from '@angular/core';
import { DefaultDataTypeValueEnum } from 'src/app/common-items/constants/default-data-type-value-enum.enum';
import { Criterion } from '../../entities/criterion';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { Option } from '../../entities/option';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';

@Component({
  selector: 'assess-options',
  templateUrl: './assess-options.component.html',
  styleUrls: ['./assess-options.component.css'],
})
export class AssessOptionsComponent implements OnInit {
  @Input('option') option: Option = new Option();
  @Input('decision-id') decisionId: string = DefaultDataTypeValueEnum.STRING;
  private _criteria: Array<Criterion> = new Array<Criterion>();

  constructor(private decisionMatrixService: DecisionMatrixAbstractService) {}

  ngOnInit() {
    this.decisionMatrixService
      .retrieveCriteria(this.decisionId, this.option.id)
      .subscribe((criteria: Array<Criterion>) => {
        this._criteria = criteria;
      });
  }

  public get criteria(): Array<Criterion> {
    return this._criteria;
  }
  public set criteria(value: Array<Criterion>) {
    this._criteria = value;
  }
}
