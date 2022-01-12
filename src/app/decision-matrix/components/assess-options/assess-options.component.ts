import { Component, Input, OnInit } from '@angular/core';
import { Criterion } from '../../entities/criterion';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { Option } from '../../entities/option';

@Component({
  selector: 'assess-options',
  templateUrl: './assess-options.component.html',
  styleUrls: ['./assess-options.component.css'],
})
export class AssessOptionsComponent implements OnInit {
  @Input('option') option: Option = new Option();
  @Input('criteria') criteria: Array<Criterion> = new Array<Criterion>();

  constructor() {}

  ngOnInit() {}
}
