import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionMatrixStartComponent } from './decision-matrix-start.component';

describe('DecisionMatrixStartComponent', () => {
  let component: DecisionMatrixStartComponent;
  let fixture: ComponentFixture<DecisionMatrixStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionMatrixStartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionMatrixStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
