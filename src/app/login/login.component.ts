import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarioServices } from '../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private service: usuarioServices) {
    this.loginForm = this.fb.group({
      CORREO: ['', [Validators.required, Validators.email]],
      CONTRASENA: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      localStorage.clear();
     this.inicioSesion()
      console.log("iniciando...");
      console.log(localStorage);
      

      
    } else {

    }
  }

  inicioSesion() {
    
    let correo = this.loginForm.getRawValue().CORREO;
    let pass = this.loginForm.getRawValue().CONTRASENA;


    const userData = {
      CORREO: correo,
      CONTRASENA: pass,
    
    };

    this.service.loginuser(userData).subscribe(
      res => {
        this.isLoading = true; 
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('nombreCompleto', res.user.nombreCompleto);
        localStorage.setItem('correo', res.user.correo);

        setTimeout(() => {
          this.isLoading = false; 
          this.router.navigate(['/index']); 
        }, 3000);
      },
      error => {
        console.log(error);
        this.isLoading = false; 
        alert('Error al iniciar sesión. Verifica tus credenciales.');
      }
    );
  }


}
