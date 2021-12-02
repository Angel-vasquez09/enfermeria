import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  redireccionar = () => {
    window.history.back();
  }


}
