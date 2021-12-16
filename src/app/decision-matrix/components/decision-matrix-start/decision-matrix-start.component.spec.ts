import { DecisionMatrixService } from '../../services/decision-matrix.service';
import { MockEnum } from './../../constants/mock-enum.enum';
import { RoutesEnum } from './../../constants/routes-enum.enum';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionMatrixStartComponent } from './decision-matrix-start.component';
import { MockDecisionMatrixService } from '../../services/mock-decision-matrix.service';
import { DecisionMatrixAbstractService } from '../../services/decision-matrix-abstract-service';

describe('DecisionMatrixStartComponent', () => {
  let component: DecisionMatrixStartComponent;
  let fixture: ComponentFixture<DecisionMatrixStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionMatrixStartComponent],
      providers: [
        {
          provide: DecisionMatrixAbstractService,
          useValue: MockDecisionMatrixService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionMatrixStartComponent);
    component = new DecisionMatrixStartComponent(
      new MockDecisionMatrixService()
    );
    fixture.detectChanges();
  });

  // it('should retrieve a non-null route', () => {
  //   expect(component.generateRoute()).not.toBeUndefined();
  //   expect(component.generateRoute()).not.toBeNull();
  //   expect(component.generateRoute()).not.toEqual('');
  // });

  // it('should route the user to capture a title for the new decision', () => {
  //   expect(component.generateRoute()).toEqual(
  //     `/${RoutesEnum.CONTEXT_ROOT}/${MockEnum.NEW_ITEM_ID}/${RoutesEnum.TITLE}`
  //   );
  // });
});
