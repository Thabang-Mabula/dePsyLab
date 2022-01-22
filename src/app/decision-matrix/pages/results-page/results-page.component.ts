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
export class ResultsPageComponent implements OnInit {
  private _rankedOptions: Array<RankedOption> = new Array<RankedOption>();
  private _decisionMatrix: DecisionMatrix = new DecisionMatrix();

  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute
  ) {}

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

  public get rankedOptions(): Array<RankedOption> {
    return this._rankedOptions;
  }
  public set rankedOptions(value: Array<RankedOption>) {
    this._rankedOptions = value;
  }

  retrieveOptionsByRank(rank: number): Array<RankedOption> {
    let filteredOptions: Array<RankedOption> = new Array<RankedOption>();
    for (let rankedOption of this._rankedOptions) {
      if (rankedOption.rank == rank) filteredOptions.push(rankedOption);
    }
    return filteredOptions;
  }
}
