import { Component, Inject, OnInit } from '@angular/core';
import { RoutesEnum } from '../../constants/routes-enum.enum';
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
    return `/${RoutesEnum.CONTEXT_ROOT}/${this.obtainNewItemId()}/${
      RoutesEnum.TITLE
    }`;
  }

  private obtainNewItemId(): string {
    console.log(this.decisionMatrixService.generateNewItemId());
    return this.decisionMatrixService.generateNewItemId();
  }
}
