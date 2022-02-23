import { Component, OnInit } from '@angular/core';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';

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
    return this.decisionMatrixService.generateNewItemId();
  }
}
