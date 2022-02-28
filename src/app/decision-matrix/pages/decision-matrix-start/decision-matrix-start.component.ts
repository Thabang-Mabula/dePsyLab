import { Component, OnInit } from '@angular/core';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';

@Component({
  selector: 'app-decision-matrix-start',
  templateUrl: './decision-matrix-start.component.html',
  styleUrls: ['./decision-matrix-start.component.css'],
})
/**
 * Component for rendering the start/landing page for the decision matrix journey
 */
export class DecisionMatrixStartComponent implements OnInit {
  /**
   * Constructor
   *
   * @param  {DecisionMatrixAbstractService} decisionMatrixService Decision Matrix Service
   */
  constructor(private decisionMatrixService: DecisionMatrixAbstractService) {}

  ngOnInit(): void {}

  /**
   * Generate route to the next page
   *
   * @returns Route to the next page
   */
  generateRoute(): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${
      DecisionMatrixRoutesEnum.TITLE
    }?id=${this.obtainNewItemId()}`;
  }

  /**
   * Geneate an ID for the new decision matrix
   *
   * @returns Decision matrix ID
   */
  private obtainNewItemId(): string {
    return this.decisionMatrixService.generateNewItemId();
  }
}
