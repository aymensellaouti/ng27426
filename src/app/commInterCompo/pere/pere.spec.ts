import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pere } from './pere';

describe('Pere', () => {
  let component: Pere;
  let fixture: ComponentFixture<Pere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
