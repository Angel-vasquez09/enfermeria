import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ListPracticaComponent } from './components/list-practica/list-practica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcelDirective } from './directive/excel.directive';
import { AddPracticaComponent } from './pages/add-practica/add-practica.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListPracticaComponent,
    ExcelDirective,
    AddPracticaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
