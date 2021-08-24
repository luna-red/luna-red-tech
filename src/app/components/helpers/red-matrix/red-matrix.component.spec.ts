import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedMatrixComponent } from './red-matrix.component';

describe('RedMatrixComponent', () => {
  let component: RedMatrixComponent;
  let fixture: ComponentFixture<RedMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
