import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSignal } from './first-signal';

describe('FirstSignal', () => {
  let component: FirstSignal;
  let fixture: ComponentFixture<FirstSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
