import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyNavButtonComponent } from './journey-nav-button.component';

describe('NavButtonComponent', () => {
  let component: JourneyNavButtonComponent;
  let fixture: ComponentFixture<JourneyNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyNavButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
