import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionMatrixComponent } from './decision-matrix.component';

describe('DecisionMatrixComponent', () => {
  let component: DecisionMatrixComponent;
  let fixture: ComponentFixture<DecisionMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionMatrixComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
