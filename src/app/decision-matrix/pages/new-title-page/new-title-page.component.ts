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
import { PageNavButtonComponent } from 'src/app/common-components/page-nav-button/page-nav-button.component';
import { KeyEventsEnum } from '../../../common-items/constants/key-events-enum.enum';

@Component({
  selector: 'app-new-title-page',
  templateUrl: './new-title-page.component.html',
  styleUrls: ['./new-title-page.component.css'],
})
export class NewTitlePageComponent implements OnInit, AfterViewInit {
  private _decisionMatrix: DecisionMatrix = new DecisionMatrix();
  @ViewChild('titleInput') titleInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('nextBtn') nextButton!: PageNavButtonComponent;

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
    console.log(this.titleInputElement.nativeElement);
    this.titleInputElement.nativeElement.focus();
  }

  ngOnInit(): void {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KeyEventsEnum.ENTER) {
      this.nextButton.click();
    }
  }

  submitTitle(): void {
    this.decisionMatrixService
      .updateDecisionMatrix(this.decisionMatrix)
      .subscribe((res) => {
        this.navigateNext(this.generateNextURL(this.decisionMatrix.id!));
      });
  }

  private navigateNext(url: string): void {
    this.router.navigateByUrl(url);
  }

  public get decisionMatrix(): DecisionMatrix {
    return this._decisionMatrix;
  }
  public set decisionMatrix(decisionMatrix: DecisionMatrix) {
    this._decisionMatrix = decisionMatrix;
  }

  private generateNextURL(id: string): string {
    return `/${DecisionMatrixRoutesEnum.CONTEXT_ROOT}/${DecisionMatrixRoutesEnum.CRITERIA}?id=${id}`;
  }
}
