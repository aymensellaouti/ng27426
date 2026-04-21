import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngstyle } from './ngstyle';

describe('Ngstyle', () => {
  let component: Ngstyle;
  let fixture: ComponentFixture<Ngstyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngstyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngstyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
