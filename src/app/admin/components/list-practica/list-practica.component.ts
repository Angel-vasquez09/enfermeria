import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PracticasService } from '../../services/practicas.service';

@Component({
  selector: 'app-list-practica',
  templateUrl: './list-practica.component.html',
  styleUrls: ['./list-practica.component.css']
})
export class ListPracticaComponent implements OnInit {

  itemPracticas: any[] = []

  constructor(private practicaSv: PracticasService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.practicaSv.getAllPracticas().subscribe(
      (data: any) => {
        this.itemPracticas = data.practicas
        console.log(this.itemPracticas)
      }
    )
  }


  formSave: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    notas: this.fb.array([
      []
    ], Validators.required)
  })

  onClickAcceder(){
    this.router.navigate(['/admin/add-practica'])
  }

  save(){

  }
  notas(e:any){
    console.log(e.target.value)
  }
}
