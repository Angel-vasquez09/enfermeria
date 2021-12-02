import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../auth/pages/home/home.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { CalificacionAlumnoComponent } from './pages/calificacion-alumno/calificacion-alumno.component';
import { DocenteComponent } from './pages/docente/docente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'docente',
        component: DocenteComponent
      },
      {
        path: 'alumnos/:codigo',
        component: AlumnoComponent
      },
      {
        path: 'alumno/:codigo/:estd',
        component: CalificacionAlumnoComponent
      },
      {
        path: '**',
        redirectTo: 'docente'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'docente'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticasRoutingModule { }
