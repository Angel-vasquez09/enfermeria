import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticasService {

  constructor(private http:HttpClient) { }

  getAllPracticas = () => {
    return this.http.get<any>('https://enfermeria-backend.herokuapp.com/practicas')
  }

  getAllProfesores = () => {
    return this.http.get<any>('https://enfermeria-backend.herokuapp.com/profesor/allProfesores')
  }

  postPractica = (data:any) => {
    return this.http.post<any>('https://enfermeria-backend.herokuapp.com/practicas',data)
  }


}
