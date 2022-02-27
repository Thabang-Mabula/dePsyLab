import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { RankedOption } from '../../entities/ranked-option';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { DecisionMatrixServiceHelper } from '../../utils/decision-matrix-service-helper';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css'],
})
/**
 * Component for rendering the Results page
 */
export class ResultsPageComponent implements OnInit {
  private _rankedOptions: Array<RankedOption> = new Array<RankedOption>();
  private _decisionMatrix: DecisionMatrix = new DecisionMatrix();
  /**
   * Constructor
   *
   * @param  {DecisionMatrixAbstractService} decisionMatrixService Decision Matrix Service
   * @param  {ActivatedRoute} activatedRoute Activated route
   */
  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Retrieves the ranked options for the decision matrix
   */
  ngOnInit() {
    DecisionMatrixServiceHelper.obtainDecisionMatrixFromRoute(
      this.activatedRoute,
      this.decisionMatrixService
    ).subscribe((decisionMatrix: DecisionMatrix) => {
      this._decisionMatrix = decisionMatrix;
      // TODO use a more elegant way of nesting the observables
      this.retrievRankedOptions();
    });
  }

  /**
   * Retrieves the ranked options for the decision matrix
   */
  private retrievRankedOptions(): void {
    this.decisionMatrixService
      .getOptionRankings(this._decisionMatrix.id!)
      .subscribe((optionRankings: Array<RankedOption>) => {
        this.rankedOptions = optionRankings;
        this.rankedOptions.sort((a: RankedOption, b: RankedOption) => {
          return a.rank - b.rank;
        });
      });
  }

  /**
   * Get the ranked options
   *
   * @returs Collection of {@link RankedOption} objects
   */
  public get rankedOptions(): Array<RankedOption> {
    return this._rankedOptions;
  }

  /**
   * Ranked options
   * 
   * @param  {Array<RankedOption>} rankedOptions Ranked options
   */
  public set rankedOptions(rankedOptions: Array<RankedOption>) {
    this._rankedOptions = rankedOptions;
  }

  /**
   * Retrieve the collection of ranked options up to a specified rank
   * 
   * @param rank Maximum rank of the option in the collection
   * @returns  Ranked options up to the specified rank
   */
  retrieveOptionsByRank(rank: number): Array<RankedOption> {
    let filteredOptions: Array<RankedOption> = new Array<RankedOption>();
    for (let rankedOption of this._rankedOptions) {
      if (rankedOption.rank == rank) filteredOptions.push(rankedOption);
    }
    return filteredOptions;
  }
}
