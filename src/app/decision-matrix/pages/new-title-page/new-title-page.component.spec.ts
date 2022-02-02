import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTitlePageComponent } from './new-title-page.component';

describe('NewTitlePageComponent', () => {
  let component: NewTitlePageComponent;
  let fixture: ComponentFixture<NewTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTitlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
