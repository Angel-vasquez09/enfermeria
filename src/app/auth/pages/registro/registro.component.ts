import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  list: any[] = ['HOMBRE', 'MUJER', 'NO_DEFINIDO']

  constructor(private fb: FormBuilder, private svAuth: AuthService) { }

  ngOnInit(): void {
  }

  formRegistro: FormGroup = this.fb.group({
    'nombres'   : [ , [Validators.required, Validators.minLength(5)] ],
    'email'     : [ , [Validators.required, Validators.email]],
    'cedula'    : [ , [Validators.required]],
    'pass1'     : [ , [Validators.required, Validators.minLength(8)]],
    'pass2'     : [ , [Validators.required, Validators.minLength(8)]],
    'sexo'      : [ , [Validators.required]],
  })

  registrar(){
    if (this.formRegistro.invalid) {
      this.formRegistro.markAllAsTouched();
      return;
    }
    if(this.formRegistro.get('pass1')?.value !== this.formRegistro.get('pass2')?.value){
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log(this.formRegistro.value);

    this.svAuth.registrarUsuario(this.formRegistro.value).subscribe(data => {
      if(data){
        Swal.fire(
          'Muy Bien!',
          'Correcto!, Profesor registrado con exito',
          'success'
        )
      }
    },error => {
      console.log(error);
      Swal.fire(
        'Error!',
        'Algo salio mal!, Verifique todos los campos',
        'error'
      )
      console.log("Verificar los campos");
    })
  }

}
