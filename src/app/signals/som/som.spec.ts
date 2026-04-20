import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Som } from './som';

describe('Som', () => {
  let component: Som;
  let fixture: ComponentFixture<Som>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Som]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Som);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
