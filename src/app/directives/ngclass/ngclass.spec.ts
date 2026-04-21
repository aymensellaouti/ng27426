import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngclass } from './ngclass';

describe('Ngclass', () => {
  let component: Ngclass;
  let fixture: ComponentFixture<Ngclass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngclass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngclass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
