import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionMapStartComponent } from './decision-map-start.component';

describe('DecisionMapStartComponent', () => {
  let component: DecisionMapStartComponent;
  let fixture: ComponentFixture<DecisionMapStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionMapStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionMapStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
