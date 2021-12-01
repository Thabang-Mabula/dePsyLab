import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionMapComponent } from './decision-map.component';

describe('DecisionMapComponent', () => {
  let component: DecisionMapComponent;
  let fixture: ComponentFixture<DecisionMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
