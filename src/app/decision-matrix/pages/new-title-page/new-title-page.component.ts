import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { ParamEnum } from '../../constants/param-enum.enum';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { PageNavButtonComponent } from 'src/app/common-items/components/page-nav-button/page-nav-button.component';
import { KeyEventsEnum } from '../../../common-items/constants/key-events-enum.enum';

@Component({
  selector: 'app-new-title-page',
  templateUrl: './new-title-page.component.html',
  styleUrls: ['./new-title-page.component.css'],
})

/**
 * Component for the page that prompts users to add a title for their decision
 */
export class NewTitlePageComponent implements OnInit, AfterViewInit {
  private _decisionMatrix: DecisionMatrix = new DecisionMatrix();
  @ViewChild('titleInput') titleInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('nextBtn') nextButton!: PageNavButtonComponent;
  MAX_LENGTH: number = 50;

  /**
   * Constructor
   *
   * @param  {DecisionMatrixAbstractService} decisionMatrixService Decision matrix service
   * @param  {ActivatedRoute} activatedRoute Activated route
   * @param  {Router} router Router
   */
  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      let decisionMatrixId = params[ParamEnum.DECISION_MATRIX_ID];
      this.decisionMatrixService
        .getDecisionMatrix(decisionMatrixId)
        .subscribe((decisionMatrix) => {
          this.decisionMatrix = decisionMatrix;
        });
    });
  }

  ngAfterViewInit(): void {
    // TODO make sure this only happens on desktop devices
    // this.titleInputElement.nativeElement.focus();
  }

  ngOnInit(): void {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KeyEventsEnum.ENTER) {
      this.nextButton.click();
    }
  }

  /**
   * Submits the title to the Decision Matrix Service
   */
  submitTitle(): void {
    this.decisionMatrixService
      .updateDecisionMatrix(this.decisionMatrix)
      .subscribe((res) => {
        this.navigateNext(this.generateNextURL(this.decisionMatrix.id!));
      });
  }

  /**
   * Navigates to the next URL
   * @param {string} url URL
   */
  private navigateNext(url: string): void {
    this.router.navigateByUrl(url);
  }

  /**
   * Gets the decision matrix
   * @returns DecisionMatrix Decision Matrix
   */
  public get decisionMatrix(): DecisionMatrix {
    return this._decisionMatrix;
  }

  /**
   * Sets the decision matrix
   */
  public set decisionMatrix(decisionMatrix: DecisionMatrix) {
    this._decisionMatrix = decisionMatrix;
  }

  /**
   * General the URL for the next page
   *
   * @param id Decision Maxtrix id
   * @returns URL for the next page
   */
  private generateNextURL(id: string): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${DecisionMatrixRoutesEnum.CRITERIA}?id=${id}`;
  }
}
