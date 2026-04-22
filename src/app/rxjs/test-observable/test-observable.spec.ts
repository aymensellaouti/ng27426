import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObservable } from './test-observable';

describe('TestObservable', () => {
  let component: TestObservable;
  let fixture: ComponentFixture<TestObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
