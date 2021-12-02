import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceInfoService } from '../../services/service-info.service';
interface Detalles{
  datosPractica: any;
  info: any;
}
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  codigoAlumno: string = "";
  rowAnterior: number = -1

  @Input() listStudiantes: Detalles = {
    datosPractica: {},
    info: {}
  };

  url: any = '';
  id: string = '';
  idEstudiante: string = ''
  selection: boolean = false;

  numberRegEx = /\-?\d*\.?\d{1,2}/;

  constructor(private serviceSV: ServiceInfoService,
                private fb: FormBuilder,
              private router: Router) {

  }

  ngOnInit(): void {

  }

  calificacion_a = (estudiante:any,codigo:any) => {
    console.log(estudiante)
    this.idEstudiante = estudiante._id;
    console.log(this.idEstudiante)
    this.selection = true;
    this.codigoAlumno = codigo;
    //* Agregarle estilo a la fila
    if(this.rowAnterior >= 0 ){
      document.querySelector(`.fila${this.rowAnterior}`)!.classList.remove("style-fila")
    }

    document.querySelector(`.fila${codigo}`)?.classList.add("style-fila")
    this.rowAnterior = codigo
  }

  acceder_alumno = () => {
    let idCod = this.listStudiantes.datosPractica.id;
    this.router.navigate([`/practicas/alumno/${idCod}/${this.idEstudiante}`])
  }

  formAdd: FormGroup = this.fb.group({
    cedula: ['', [Validators.required, ]],
    nombre: ['', [Validators.required, ]],
    pendiente: ['', [Validators.required, ]],
    notaFinal: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
  });

  submit(){
    if(!this.formAdd.valid){
      return;
    }

    let data = {
      cedula: this.formAdd.value.cedula,
      nombre: this.formAdd.value.nombre,
    }

    this.serviceSV.postNewEstudiante(this.codigoAlumno,data).subscribe(
      res => {
        alert("Estudiante guardado correctamente")
      }
    )
  }

}
