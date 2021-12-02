import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public URL: string = 'https://enfermeria-backend.herokuapp.com/'

  constructor(private http: HttpClient, private router: Router) { }


  authLogin = ( email:string, pass: string ) => {

    const data = { email: email, password: pass };

    return this.http.post(`https://enfermeria-backend.herokuapp.com/auth/login`,data)
    .subscribe((resp:any) => {
      if(resp.token){
        localStorage.setItem("token",resp.token);
        localStorage.setItem("usuario", JSON.stringify(resp.profe));
        if(resp.profe.role === 'PROFESOR'){
          this.router.navigate(['practicas'])
        }else if(resp.profe.role === 'ADMIN'){
          this.router.navigate(['admin'])
        }else{
          this.router.navigate(['auth/login'])

        }
      }
    },(err:any) => {
      console.log(err)
    })
  }

  validarUser = (): Observable<boolean> => {

    if (!localStorage.getItem('token')) {
      this.router.navigate([''])
      return of(false)
    }

    let headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);

    return this.http.get(`https://enfermeria-backend.herokuapp.com/auth/validarToken`,{
      headers: headers
    })
          .pipe(
            map( authU => {
              this.guardarStorage(authU);
              return true;
            })
          )
  }

  registrarUsuario = (data:any) => {
    let body = {
      cedula  : data.cedula,
      nombre  : data.nombres,
      email   : data.email,
      password: data.pass1,
      sexo    : data.sexo
  }
    return this.http.post(`https://enfermeria-backend.herokuapp.com/profesor/`,body)
  }

  guardarStorage(data:any){
    localStorage.setItem("token",data.token);
    localStorage.setItem("usuario", JSON.stringify(data.usuario));
  }

}
