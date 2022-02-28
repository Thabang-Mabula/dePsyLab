import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { ParamEnum } from '../../constants/param-enum.enum';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { KeyEventsEnum } from 'src/app/common-items/constants/key-events-enum.enum';
import { PageNavButtonComponent } from 'src/app/common-items/components/page-nav-button/page-nav-button.component';
import { DefaultDataTypeValueEnum } from 'src/app/common-items/constants/default-data-type-value-enum.enum';

@Component({
  selector: 'criteria-page',
  templateUrl: './criteria-page.component.html',
  styleUrls: ['./criteria-page.component.css'],
})

/**
 * Component for renderering the criteria page
 */
export class CriteriaPageComponent implements OnInit, AfterViewInit {
  criterionDescription: string = '';
  decisionMatrix: DecisionMatrix = new DecisionMatrix();
  @ViewChild('addCriterionBtn')
  addCriterionButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('criterionDescr')
  criterionDescrInput!: ElementRef<HTMLInputElement>;
  @ViewChild('nextBtn') nextButton!: PageNavButtonComponent;
  MAX_LENGTH: number = 40;

  /**
   * Constructor
   *
   * @param  {DecisionMatrixAbstractService} decisionMatrixService Decision matrix service
   * @param  {ActivatedRoute} activatedRoute Actiivated route
   * @param  {Router} router Router
   */
  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // TODO generalise this into a common method in a util and re-use instead of copy/pasting
    // TODO move this code to the ngOnInit everywhere
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
    // this.criterionDescrInput.nativeElement.focus();
  }

  ngOnInit() {}

  /**
   * Submit update decision matrix and navigate user to the next page
   */
  submit(): void {
    this.decisionMatrixService
      .updateDecisionMatrix(this.decisionMatrix)
      .subscribe((res) => {
        this.navigateNext(this.generateNextURL(this.decisionMatrix.id!));
      });
  }

  /**
   * Add a criterion to the existing criteria
   */
  addCriterion(): void {
    if (
      this.criterionDescription != null &&
      this.criterionDescription != undefined &&
      this.criterionDescription.trim() !== ''
    ) {
      this.decisionMatrix.addCriterion(this.criterionDescription);
    }
    this.criterionDescription = DefaultDataTypeValueEnum.STRING;
    this.criterionDescrInput.nativeElement.focus();
  }

  /**
   * Checks whether the user is permitted to proceed to the next page
   * @returns True if the user is permitted to proceed
   */
  isValidToProceed(): boolean {
    return this.decisionMatrix.criteria.length > 0;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case KeyEventsEnum.ENTER:
        this.nextButton.click();
        break;
      case KeyEventsEnum.TAB:
        this.addCriterionButton.nativeElement.click();
        break;
      default:
        break;
    }
    if (event.key === KeyEventsEnum.ENTER) {
      this.nextButton.click();
    }
  }

  /**
   * Naviate the user to a specified url
   *
   * @param url URL to navigate the user to
   */
  private navigateNext(url: string): void {
    this.router.navigateByUrl(url);
  }

  /**
   * Generate the next URL
   *
   * @param id Decision matrix id
   * @returns Route to the next page
   */
  private generateNextURL(id: string): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${DecisionMatrixRoutesEnum.OPTIONS}?id=${id}`;
  }
}
