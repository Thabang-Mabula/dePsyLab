import { Component, Inject, OnInit } from '@angular/core';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { DecisionMatrixServiceInterface } from '../../services/decision-matrix-service-interface';
import { DecisionMatrixService } from '../../services/decision-matrix.service';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { MockDecisionMatrixService } from '../../services/mock-decision-matrix.service';

@Component({
  selector: 'app-decision-matrix-start',
  templateUrl: './decision-matrix-start.component.html',
  styleUrls: ['./decision-matrix-start.component.css'],
})
export class DecisionMatrixStartComponent implements OnInit {
  constructor(private decisionMatrixService: DecisionMatrixAbstractService) {}

  ngOnInit(): void {}

  generateRoute(): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${
      DecisionMatrixRoutesEnum.TITLE
    }?id=${this.obtainNewItemId()}`;
  }

  private obtainNewItemId(): string {
    console.log(this.decisionMatrixService.generateNewItemId());
    return this.decisionMatrixService.generateNewItemId();
  }
}
