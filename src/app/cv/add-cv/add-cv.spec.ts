import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCv } from './add-cv';

describe('AddCv', () => {
  let component: AddCv;
  let fixture: ComponentFixture<AddCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
