import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

interface Detalles{
  datosPractica: any;
  info: any;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceInfoService {

  info = new EventEmitter<any>();
  calificaiconE = new EventEmitter<any>();

  constructor(private http:HttpClient) { }


  //* OBTENER TODAS LAS PRACTICAS
  getAllPracticas = () => {
    return this.http.get<any>('https://enfermeria-backend.herokuapp.com/practicas')
  }

  //* OBTENER DETALLES DE PRACTICA POR ID
  getPracticaId = (id:string) => {
    return this.http.get<Detalles>(`https://enfermeria-backend.herokuapp.com/practicas/${id}`)
  }

  //* OBTENER ESTUDIANTE POR ID
  getEstudiante = (cod:string,id:string) => {
    return this.http.get<Detalles>(`https://enfermeria-backend.herokuapp.com/practicas/${cod}`)
  }

  postNewEstudiante = (cod: string, data:any) => {
    return this.http.post<any>(`https://enfermeria-backend.herokuapp.com/practicas/${cod}`, data)
  }

  //* Obtener practicas por cedula de docente
  getPracticasByDocente = (cedula:any) => {
    return this.http.get<any>(`https://enfermeria-backend.herokuapp.com/practicas/practicaDocente/${cedula}`)
  }


  //* Actualizar notas ESTUDIANTE
  updateNotas = (cod:string, cedula:any, data:any) => {
    let body = {
      codPractica: cod,
      cedulaAlumno: cedula,
      notasAlumno: data
    }
    return this.http.post<any>(`https://enfermeria-backend.herokuapp.com/practicas/actualizarEstudiante`, body)
  }


  get_info = (data:any) => {
    // Resibo los datos de la practica a buscar
    console.log(data)
    this.info.emit(data)

  }

  getCalificacionEstudiante = (data:any) => {
    this.calificaiconE.emit(data)
  }

}
