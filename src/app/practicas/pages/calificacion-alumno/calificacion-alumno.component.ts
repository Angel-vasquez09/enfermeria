import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceInfoService } from '../../services/service-info.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-calificacion-alumno',
  templateUrl: './calificacion-alumno.component.html',
  styleUrls: ['./calificacion-alumno.component.css']
})
export class CalificacionAlumnoComponent implements OnInit {
  codigo: any;
  link: string = `practicas/alumnos`

  estudiante: any = {}
  notasPractica: any;

  url: any = '';
  idCod: string = '';
  idEstud: string = '';
  idProAuth: string = ''

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private infoSv: ServiceInfoService) {

    this.url = this.router.parseUrl(this.router.url);
    this.idCod = this.url.root.children.primary.segments[2].path;
    this.idEstud = this.url.root.children.primary.segments[3].path;

  }

  ngOnInit(): void {

    this.idProAuth = JSON.parse(localStorage.getItem('usuario')!).cedula;

    this.infoSv.getPracticaId(this.idCod).subscribe(
      res => {
        let estudiantes = [];
        estudiantes = res.datosPractica.estudiantes;
        this.notasPractica = res.datosPractica.notas;
        this.estudiante = estudiantes.filter((est:any) => est._id === this.idEstud)

        console.log(this.estudiante)
        if(this.estudiante[0].notas.length > 0){
          for (let index = 0; index < this.notasPractica.length; index++) {
            const notas = this.estudiante[0].notas[index];
            this.notasPractica[index] = {
              cedulaDocenteEncargado: this.notasPractica[index].cedulaDocenteEncargado,
              notax: this.notasPractica[index].notax,
              porcentaje: this.notasPractica[index].porcentaje,
              calificacion: notas.calificacion
            }
            console.log(notas.calificacion)
          }
          console.log(this.notasPractica)
        }

        this.notasPractica.forEach((n:any) => {
          this.notasArr.push(new FormControl(n.calificacion));
        });

      }
      );


  }

  get notasArr(){
    return this.formNotas.get('notas') as FormArray;
  }


  formNotas: FormGroup = this.fb.group({
    notas: this.fb.array([
      []
    ], Validators.required)
  })


  submit(){
    if (this.formNotas.invalid) {
      Swal.fire(
        'Error!',
        'Algo salio mal!, Verifica todos los campos',
        'error'
      )
      /* this.formLogin.markAllAsTouched(); */
      return;
    }
    let notaEstudiante: { notax: any; calificacion: string; porcentaje: any; }[] = [];
    let nota = document.querySelector("#nota1") as HTMLInputElement
    let notas: string[] = []
    this.notasPractica.forEach((n:any) => {
      console.log(n.notax)
      let cali = document.querySelector(`#${n.notax}`) as HTMLInputElement
      notaEstudiante.push({
        notax: n.notax,
        calificacion: cali.value,
        porcentaje: n.porcentaje
      })
    })

    this.infoSv.updateNotas(this.idCod, this.estudiante[0].cedula, notaEstudiante).subscribe(
      res => {
        Swal.fire(
          'Correcto!',
          'Todo fue un exito!',
          'success'
        )
      },error => {
        Swal.fire(
          'Error!',
          'Algo salio mal!',
          'error'
        )
      }
    )


  }
}
