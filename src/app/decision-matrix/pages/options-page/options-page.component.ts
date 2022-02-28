import { Option } from './../../entities/option';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { ParamEnum } from '../../constants/param-enum.enum';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { DefaultDataTypeValueEnum } from '../../../common-items/constants/default-data-type-value-enum.enum';
import { KeyEventsEnum } from 'src/app/common-items/constants/key-events-enum.enum';
import { PageNavButtonComponent } from 'src/app/common-items/components/page-nav-button/page-nav-button.component';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.css'],
})

/**
 * Component for rendering the Options Page
 */
export class OptionsPageComponent implements OnInit, AfterViewInit {
  decisionMatrix: DecisionMatrix = new DecisionMatrix();
  optionDescription: string = DefaultDataTypeValueEnum.STRING;
  @ViewChild('addOptionBtn') addOptionButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('optionDescr') optionDescrInput!: ElementRef<HTMLInputElement>;
  @ViewChild('nextBtn') nextButton!: PageNavButtonComponent;
  MAX_LENGTH: number = 50;

  /**
   * Constructor
   *
   * @param  {DecisionMatrixAbstractService} decisionMatrixService Decision Matrix Serivce
   * @param  {ActivatedRoute} activatedRoute Acivated Route
   * @param  {Router} router Router
   */
  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // TODO generalise this into a common method in a util and re-use instead of copy/pasting
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
    // this.optionDescrInput.nativeElement.focus();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case KeyEventsEnum.ENTER:
        this.nextButton.click();
        break;
      case KeyEventsEnum.TAB:
        this.addOptionButton.nativeElement.click();
        break;
      default:
        break;
    }
    if (event.key === KeyEventsEnum.ENTER) {
      this.nextButton.click();
    }
  }

  ngOnInit(): void {}

  /**
   * Navigate to the next page
   */
  submit(): void {
    this.decisionMatrixService
      .updateDecisionMatrix(this.decisionMatrix)
      .subscribe((res) => {
        this.navigateNext(this.generateNextURL(this.decisionMatrix.id!));
      });
  }

  /**
   * Add an option to the current option list
   */
  addOption() {
    this.decisionMatrix?.addOption(this.optionDescription.trim());

    this.optionDescription = DefaultDataTypeValueEnum.STRING;
    this.optionDescrInput.nativeElement.focus();
  }
  /**
   * Navigate to the next URL
   * @param  {string} url URL to navigate to
   */
  private navigateNext(url: string): void {
    this.router.navigateByUrl(url);
  }

  /**
   * Generate the next URL
   *
   * @param id Decision Matrix id
   * @returns Route to next page based on id
   */
  private generateNextURL(id: string): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${DecisionMatrixRoutesEnum.ASSESS_OPTIONS}?id=${id}`;
  }

  /**
   * Return true if it is valid for the user to move to the next page
   *
   * @returns True if it is valid for the user to move to the next page
   */
  isValidToProceed(): boolean {
    return this.decisionMatrix.options.length > 0;
  }
}
