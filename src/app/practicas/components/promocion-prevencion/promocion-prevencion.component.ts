import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceInfoService } from '../../services/service-info.service';

interface Detalles{
  datosPractica: any;
  info: any;
}

@Component({
  selector: 'app-promocion-prevencion',
  templateUrl: './promocion-prevencion.component.html',
  styleUrls: ['./promocion-prevencion.component.css']
})
export class PromocionPrevencionComponent implements OnInit {
  @Input() practica: Detalles = {
    datosPractica: {},
    info: {}
  };
  codigo: string = '';
  url: any = ''

  constructor(private infoSV: ServiceInfoService, private router: Router) {
    this.url = this.router.parseUrl(this.router.url);
    let countCod = this.url.root.children.primary.segments[this.url.root.children.primary.segments.length - 1].path;
    if(countCod.length > 10){
      this.codigo = countCod;

    }

  }

  ngOnInit(): void {
    console.log(this.practica.datosPractica._id)
    this.infoSV.info.subscribe(s => {
      this.codigo = s;
      this.infoSV.getPracticaId(this.codigo).subscribe((p) => {
        this.practica = p;
        console.log(this.practica)
      })
    })

  }

}
