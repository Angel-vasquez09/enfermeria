import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionAlumnoComponent } from './calificacion-alumno.component';

describe('CalificacionAlumnoComponent', () => {
  let component: CalificacionAlumnoComponent;
  let fixture: ComponentFixture<CalificacionAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
