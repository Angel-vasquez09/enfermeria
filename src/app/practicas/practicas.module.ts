import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticasRoutingModule } from './practicas-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListPracticasComponent } from './components/list-practicas/list-practicas.component';
import { SearchComponent } from './components/search/search.component';
import { DocenteComponent } from './pages/docente/docente.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { SharedModule } from '../shared/shared.module';
import { PromocionPrevencionComponent } from './components/promocion-prevencion/promocion-prevencion.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { CalificacionAlumnoComponent } from './pages/calificacion-alumno/calificacion-alumno.component';
import { LinkComponent } from './components/link/link.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ListPracticasComponent,
    PromocionPrevencionComponent,
    SearchComponent,
    DocenteComponent,
    AlumnoComponent,
    ListStudentComponent,
    CalificacionAlumnoComponent,
    LinkComponent,

  ],
  imports: [
    CommonModule,
    PracticasRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PracticasModule { }
