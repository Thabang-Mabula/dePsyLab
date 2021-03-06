import {
  Component,
  HostListener,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DefaultDataTypeValueEnum } from 'src/app/common-items/constants/default-data-type-value-enum.enum';
import { KeyEventsEnum } from 'src/app/common-items/constants/key-events-enum.enum';
import { Criterion } from '../../entities/criterion';
import { Option } from '../../entities/option';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';

const SCORE_COLUMN_INDEX = 1;
const SCORE_INPUT_ELEMENT_INDEX = 0;
const OFFSET_UP = -1;
const OFFSET_DOWN = 1;
@Component({
  selector: 'assess-options',
  templateUrl: './assess-options.component.html',
  styleUrls: ['./assess-options.component.css'],
})
export class AssessOptionsComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input('option') option: Option = new Option();
  @Input('decision-id') decisionId: string = DefaultDataTypeValueEnum.STRING;
  @ViewChild('scoringTable') scoringTable!: ElementRef<HTMLTableElement>;
  private _criteria: Array<Criterion> = new Array<Criterion>();
  private scoreInputInFocus: number = 1;
  MIN_SCORE: number = 1;
  MAX_SCORE: number = 3;

  constructor(private decisionMatrixService: DecisionMatrixAbstractService) {}

  ngOnInit() {
    this.decisionMatrixService
      .retrieveCriteria(this.decisionId, this.option.id)
      .subscribe((criteria: Array<Criterion>) => {
        this.criteria = criteria;
      });
  }

  ngAfterViewInit(): void {
    this.focusScoreInput(this.scoreInputInFocus);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.decisionMatrixService
      .retrieveCriteria(this.decisionId, changes.option.currentValue.id)
      .subscribe((criteria: Array<Criterion>) => {
        this.criteria = criteria;
      });
  }

  public get criteria(): Array<Criterion> {
    return this._criteria;
  }
  public set criteria(value: Array<Criterion>) {
    this._criteria = value;
  }

  // TODO Allow users to go up and down the scores for usability
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case KeyEventsEnum.ARROW_DOWN:
        this.offsetScoreFocus(OFFSET_DOWN);
        break;
      case KeyEventsEnum.ARROW_UP:
        this.offsetScoreFocus(OFFSET_UP);
        break;
      default:
        break;
    }
  }

  private focusScoreInput(row: number) {
    (<HTMLInputElement>(
      this.scoringTable.nativeElement.rows[row].cells[SCORE_COLUMN_INDEX]
        .children[SCORE_INPUT_ELEMENT_INDEX]
    )).focus();
  }

  // TODO This logic needs more work. It breaks at the max boundry
  private incrementScoreInputIndex(increment: number) {
    this.scoreInputInFocus =
      (this.scoreInputInFocus + increment) % (this.criteria.length + 1);

    if (this.scoreInputInFocus < 1) {
      this.scoreInputInFocus = this.criteria.length + 1;
    }
  }

  private offsetScoreFocus(offset: number) {
    this.incrementScoreInputIndex(offset);
    this.focusScoreInput(this.scoreInputInFocus);
  }

  saveCriteria() {
    this.decisionMatrixService
      .updateCriteria(this.decisionId, this.option.id, this.criteria)
      .subscribe();
  }
}
