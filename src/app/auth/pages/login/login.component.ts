import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-p-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.formLogin.reset({
      'email': 'profesor1@hotmail.com',
      'pass'  : "123456789",
    })
  }


  formLogin: FormGroup = this.fb.group({
    'email'   : [ , [Validators.required, Validators.minLength(3)] ],
    'pass'    : [ , [Validators.required, Validators.minLength(4)]],
    'role'    : ['', Validators.required]
  })

  loguear(){
    if (this.formLogin.invalid) {
      Swal.fire(
        'Error!',
        'Algo salio mal!, Verifique todos los campos Seleccione un role',
        'error'
      )
      console.log("Validar todos los campos")
      this.formLogin.markAllAsTouched();
      return;
    }

    this.auth.authLogin(this.formLogin.value.email, this.formLogin.value.pass);


  }
}
