import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPracticaComponent } from './list-practica.component';

describe('ListPracticaComponent', () => {
  let component: ListPracticaComponent;
  let fixture: ComponentFixture<ListPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
