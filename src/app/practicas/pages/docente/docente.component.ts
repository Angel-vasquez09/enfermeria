import { Component, OnInit } from '@angular/core';
import { ServiceInfoService } from '../../services/service-info.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  practicas: any[] = []
  profe:any;

  constructor(private service: ServiceInfoService) {

  }

  docente:string = ''

  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem('usuario')!)
    this.docente =  usuario.nombre;
    this.profe = usuario;
    console.log(this.profe);
    this.docente = this.docente.toUpperCase()


    this.service.getPracticasByDocente(this.profe.cedula).subscribe(resp => {
      this.practicas.push(resp)
    })
  }



}
