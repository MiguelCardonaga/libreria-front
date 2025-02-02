import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarioServices } from '../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  vista = true
  

 

  constructor(private fb: FormBuilder,
    private router: Router,
    private services: usuarioServices,
    private alerta: MatSnackBar,
  ) {
    this.registerForm = this.fb.group({
      NOMBRE_COMPLETO: ['', [Validators.required, Validators.minLength(5)]],
      TIPO_DOCUMENTO: ['', Validators.required],
      NUMERO_DOCUMENTO: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      CORREO: ['', [Validators.required, Validators.email]],
      CONTRASENA: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);
      this.register()
      this.vista = false
    
    } else {
      
      console.log('Formulario no válido:', this.registerForm.value);

    }
  }

  // cancelar() {
  //   this.router.navigate(['./inicio']);
  // }
  login() {
    this.router.navigate(['./login']);
  }


  register() {
    
    let nombreControl = this.registerForm.getRawValue().NOMBRE_COMPLETO;
    let tipodocumento = this.registerForm.getRawValue().TIPO_DOCUMENTO;
    let numerodocumento = this.registerForm.getRawValue().NUMERO_DOCUMENTO;
    let correo = this.registerForm.getRawValue().CORREO;
    let contrasena = this.registerForm.getRawValue().CONTRASENA;

    const userData = {
      NOMBRE_COMPLETO: nombreControl,
      TIPO_DOCUMENTO: tipodocumento,
      NUMERO_DOCUMENTO: numerodocumento,
      CORREO: correo,
      CONTRASENA: contrasena
    };

    this.services.registerUser(userData).subscribe(
      res => {
        const mensaje = 'Registro insertado exitosamente';
        alert('Registro insertado exitosamente'); 
      },
      error => {
        this.registerForm.reset
        alert('Ya tienes un correo registrado anteriormente'); 
      }
    );
  }


}
