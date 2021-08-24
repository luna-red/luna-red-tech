import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsToSuccessComponent } from './steps-to-success.component';

describe('StepsToSuccessComponent', () => {
  let component: StepsToSuccessComponent;
  let fixture: ComponentFixture<StepsToSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsToSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsToSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
