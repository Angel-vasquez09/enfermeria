import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionPrevencionComponent } from './promocion-prevencion.component';

describe('PromocionPrevencionComponent', () => {
  let component: PromocionPrevencionComponent;
  let fixture: ComponentFixture<PromocionPrevencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionPrevencionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionPrevencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
