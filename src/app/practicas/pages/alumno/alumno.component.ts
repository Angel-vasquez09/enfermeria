import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceInfoService } from '../../services/service-info.service';
interface Detalles{
  datosPractica: any;
  info: any;
}
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  codigo: string = ''
  link: string = "/practicas/docente"

  practica: Detalles = {
    datosPractica: {},
    info: {}
  };

  url: any = '';
  id: string = ''
  constructor(private route: ActivatedRoute,
              private router: Router,
              private infoSV: ServiceInfoService) {
    this.url = this.router.parseUrl(this.router.url);
    this.id = this.url.root.children.primary.segments[2].path;
    this.codigo = this.id;
    this.infoSV.getPracticaId(this.id).subscribe(p => {
      this.practica = p;
    })
  }

  ngOnInit(): void {

    console.log(this.practica)

  }


}
