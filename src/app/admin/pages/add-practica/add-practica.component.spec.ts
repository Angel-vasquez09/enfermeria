import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPracticaComponent } from './add-practica.component';

describe('AddPracticaComponent', () => {
  let component: AddPracticaComponent;
  let fixture: ComponentFixture<AddPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
