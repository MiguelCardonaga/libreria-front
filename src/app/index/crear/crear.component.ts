import { Component, OnInit  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { libroServices } from 'src/app/services/libro.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrearComponent implements OnInit {


createForm: FormGroup;
  
  generos = [
    { id: 1,  nombre: 'No identificado' },
    { id: 2,  nombre: 'Varios' },
    { id: 3,  nombre: 'Misterio' },
    { id: 4,  nombre: 'Ciencia Ficción' },
    { id: 5,  nombre: 'Fantasía' },
    { id: 6,  nombre: 'Terror' },
    { id: 7,  nombre: 'Romance' },
    { id: 8,  nombre: 'Aventura' },
    { id: 9,  nombre: 'Histórico' },
    { id: 10, nombre: 'Biografía' },
    { id: 11, nombre: 'Drama' },
    { id: 12, nombre: 'Thriller' },
    { id: 13, nombre: 'Autoayuda' },
  ];

  estados = [
    { id: 1, nombre: 'No identificado' },
    { id: 2, nombre: 'Perdido' },
    { id: 3, nombre: 'Prestado' },
    { id: 4, nombre: 'Reservado' },
    { id: 5, nombre: 'Disponible' },
    { id: 6, nombre: 'Inactivo' },
  ];


  constructor( private fb: FormBuilder,
    private dialogRef: MatDialogRef<CrearComponent>,
    private snackBar: MatSnackBar,
    private services: libroServices) {

      this.createForm = this.fb.group({
        TITULO:           ['', Validators.required],
        AUTOR:            ['', Validators.required],
        ANIO_PUBLICACION: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(1[0-9]{3}|20[0-9]{2})$/) // Años entre 1000 y 2099
          ]
        ],
        GENERO_ID:        ['', Validators.required],
        ESTADO_ID:        ['', Validators.required],
      });
    }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
   
  }


  onSubmit(): void {
    if (this.createForm.valid) {
        this.services.crearLibro(this.objeto()).subscribe(
            res => {
                console.log(res);
                if (res.msg == 'Libro registrado con éxito') {
                    console.log(this.objeto());
                    this.createForm.reset();
                    alert('Formulario válido'); 
                }
            }
        );
    } else if (this.createForm.invalid) {
        this.createForm.reset();
        alert('Formulario no válido. Verifique los campos.'); 
    }
}



  objeto(){

    const objeto = {
      TITULO: this.createForm.getRawValue().TITULO,
      AUTOR: this.createForm.getRawValue().AUTOR,
      AÑO_PUBLICACION: this.createForm.getRawValue().ANIO_PUBLICACION,
      GENERO_ID: this.createForm.getRawValue().GENERO_ID,
      ESTADO_ID: this.createForm.getRawValue().ESTADO_ID
    }

    return objeto
  }

  
}
