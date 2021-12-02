import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceInfoService } from '../../services/service-info.service';

@Component({
  selector: 'app-list-practicas',
  templateUrl: './list-practicas.component.html',
  styleUrls: ['./list-practicas.component.css']
})
export class ListPracticasComponent implements OnInit {

  @Input() itemPracticas: any[] = []
  dataList : any[] = [];

  codigo: string = '';
  fila_anterior: string = '';
  disabled: boolean = true;

  constructor(private infoSV: ServiceInfoService,
              private router: Router,
              private render: Renderer2) { }

  ngOnInit(): void {
  }

  detallePractica(i:string){
    this.codigo = i;
    // Emito el valor de busqueda al servicio
    this.infoSV.get_info(i)
    if(this.fila_anterior != ''){
      document.querySelector(`.fila${this.fila_anterior}`)!.classList.remove("style-fila");
    }

    const fila = document.querySelector(`.fila${i}`);
    fila?.classList.add("style-fila")
    this.fila_anterior = i;
    this.disabled = false;
  }

  // Redireccionar a pagina de practica y sus alimnos
  pagina_alumnos(){
    this.router.navigate([`practicas/alumnos/${this.codigo}`])
  }



}
