import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionMatrix } from '../../entities/decision-matrix';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';
import { DecisionMatrixServiceHelper } from '../../utils/decision-matrix-service-helper';
import { Option } from '../../entities/option';
import { DecisionMatrixRoutesEnum } from '../../constants/decision-matrix-routes-enum.enum';
import { DefaultDataTypeValueEnum } from '../../../common-items/constants/default-data-type-value-enum.enum';
import { KeyEventsEnum } from 'src/app/common-items/constants/key-events-enum.enum';
import { PageNavButtonComponent } from '../../../common-items/components/page-nav-button/page-nav-button.component';
import { AssessOptionsComponent } from '../../components/assess-options/assess-options.component';

@Component({
  selector: 'assess-options-page',
  templateUrl: './assess-options-page.component.html',
  styleUrls: ['./assess-options-page.component.css'],
})

/**
 * Component for rendering the page whether users assess the extent to which
 * each of their options meets their specified criteria
 */
export class AssessOptionsPageComponent implements OnInit {
  private _decisionMatrix = new DecisionMatrix();
  private _optionIndex: number = 0;
  @ViewChild('prevOptionBtn') prevOptionButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextOptionBtn') nextOptionButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('calculateBtn') calculateButton!: PageNavButtonComponent;
  @ViewChild('assessOptionsComp') assessOptionsComp!: AssessOptionsComponent;

  /**
   * Constructor
   *
   * @param decisionMatrixService Decision Matrix Service
   * @param activatedRoute Activate Route
   * @param router Router
   */
  constructor(
    private decisionMatrixService: DecisionMatrixAbstractService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Retrieves the decision matrix from the service on component init
   */
  ngOnInit() {
    DecisionMatrixServiceHelper.obtainDecisionMatrixFromRoute(
      this.activatedRoute,
      this.decisionMatrixService
    ).subscribe((decisionMatrix: DecisionMatrix) => {
      this.decisionMatrix = decisionMatrix;
    });
  }

  get decisionMatrix(): DecisionMatrix {
    return this._decisionMatrix;
  }

  set decisionMatrix(decisionMatrix: DecisionMatrix) {
    this._decisionMatrix = decisionMatrix;
  }

  get currentOption(): Option {
    return this.decisionMatrix.options[this._optionIndex];
  }

  goToNextOption() {
    this.saveProgress();
    if (!this.isLastOption()) this._optionIndex++;
  }

  goToPreviousOption() {
    this.saveProgress();
    if (!this.isFirstOption()) this._optionIndex--;
  }

  isFirstOption() {
    return this._optionIndex == 0;
  }

  isLastOption() {
    return (
      this._optionIndex == this._decisionMatrix.options.length - 1 ||
      this._decisionMatrix.options.length == 0
    );
  }

  /**
   * Updates the decision matrix service and navigates users to the next page
   */
  submit(): void {
    this.saveProgress();
    this.decisionMatrixService
      .updateDecisionMatrix(this.decisionMatrix)
      .subscribe((res) => {
        this.navigateNext(this.generateNextURL(this.decisionMatrix.id!));
      });
  }

  /**
   * Navigate to the next URL
   *
   * @param url URL to navigate to
   */
  private navigateNext(url: string): void {
    this.router.navigateByUrl(url);
  }

  // TODO Create a util that does this for you
  private generateNextURL(id: string): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${DecisionMatrixRoutesEnum.RESULTS}?id=${id}`;
  }

  /**
   * Saves the scores that were given to the current set of criteria for a given option
   */
  private saveProgress(): void {
    this.assessOptionsComp.saveCriteria();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case KeyEventsEnum.ARROW_LEFT:
        this.prevOptionButton.nativeElement.click();
        break;
      case KeyEventsEnum.ARROW_RIGHT:
        this.nextOptionButton.nativeElement.click();
        break;
      case KeyEventsEnum.ENTER:
        this.calculateButton.click();
        break;
      default:
        break;
    }
  }
}
