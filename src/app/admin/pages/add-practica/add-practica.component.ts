import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PracticasService } from '../../services/practicas.service';
import Swal from 'sweetalert2'


interface Notas{
  notax     : string;
  porcentaje: number;
  encargado : string;
}

@Component({
  selector: 'app-add-practica',
  templateUrl: './add-practica.component.html',
  styleUrls: ['./add-practica.component.css']
})
export class AddPracticaComponent implements OnInit {

  notas: Notas[] = [];
  cantidadSems: any[] = [];
  cantidadDocentes: any[] = [0];
  profesores: any[] = []
  practica: any[] = [];
  constructor(private fb: FormBuilder, private svPracticas: PracticasService) {

  }

  ngOnInit(): void {
    this.svPracticas.getAllProfesores().subscribe(data => {
      this.profesores = [...data.profesores];
      console.log(this.profesores)
    })
  }


  form: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  addNotas(e:any){
    let num = parseInt(e.target.value);

    let igual = this.cantidadSems.filter(item => item === num)
    console.log(igual.length)
    if(igual.length === 0){
      this.cantidadSems.push(num);
    }

  }


  addDocentes(e:any){
    let num = parseInt(e.target.value);
    this.cantidadDocentes = []
    for (let index = 1; index <= num; index++) {
      this.cantidadDocentes.push(index);
    }
  }

  deleteS(ite:any){
    this.cantidadSems = this.cantidadSems.filter(item => item != ite)
  }

  DataEventEmiter(e:any){
    this.practica = [...e];
    console.log(this.practica)
  }


  onSubmit(e:any){
    if(this.form.valid){
      if(this.practica.length > 0 && this.cantidadSems.length > 0){
        let cedulaProfesores: any[] = []
        let estudiantes: any[] = []
        let notas: any[] = []
        let profesores = this.practica[0].profesores.forEach((c:any) => {
          cedulaProfesores.push(c.cedulaProfesores)
        });

        this.practica[0].estudiantes.forEach((e:any) => {
          estudiantes.push({
            cedula: e.cedula,
            nombresApellidos: e.nombresApellidos
          })
        });
        this.practica[0].notas.forEach((n:any) => {
          notas.push({
            notax: n.notax,
            porcentaje: n.porcentaje,
            cedulaDocenteEncargado: n.cedulaDocenteEncargado
          })
        });

        let data = {
          nombre: this.form.get('nombre')!.value,
          cedulaProfesores: cedulaProfesores,
          estudiantes: estudiantes,
          notas: notas,
          semestres: [...this.cantidadSems],

        }

        this.svPracticas.postPractica(data).subscribe((resp:any) => {
          Swal.fire(
            'Correcto!',
            'Todo fue un exito!, Practica creada correctamente',
            'success'
          )
        },error => {
          Swal.fire(
            'Error!',
            'Algo salio mal!, Intente de nuevo',
            'error'
          )
        })


      }else{
        Swal.fire(
          'Error!',
          'Algo salio mal!, Verifique todos los campos',
          'error'
        )
      }

    }else{
      Swal.fire(
        'Error!',
        'Algo salio mal!, Verifique todos los campos',
        'error'
      )
    }
  }


}
