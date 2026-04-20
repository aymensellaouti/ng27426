import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingCard } from './rotating-card';

describe('RotatingCard', () => {
  let component: RotatingCard;
  let fixture: ComponentFixture<RotatingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatingCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotatingCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
