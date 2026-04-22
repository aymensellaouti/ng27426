import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NF404 } from './nf404';

describe('NF404', () => {
  let component: NF404;
  let fixture: ComponentFixture<NF404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NF404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NF404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
