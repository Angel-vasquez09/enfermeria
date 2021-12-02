import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("cerrar") cerrar!: ElementRef;
  nameDoncente = ''

  login: boolean = false;

  abierto: boolean = false;

  constructor(private render: Renderer2, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('usuario')){
      this.login = true;
      this.nameDoncente = JSON.parse(localStorage.getItem('usuario')!).nombre
    }



  }

  close = () => {

    if(!this.abierto){
      this.render.addClass(this.cerrar.nativeElement,"close")
      this.abierto = true
    }else{
      this.render.removeClass(this.cerrar.nativeElement,"close")
      this.abierto = false
    }
  }

  logout = () => {
    localStorage.removeItem('usuario')
    localStorage.removeItem('token')
    this.router.navigate(['/'])

  }

}
