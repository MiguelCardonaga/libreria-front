import { Component, OnInit  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { libroServices } from 'src/app/services/libro.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModificarComponent {

  modificarform: FormGroup;
  

  estados = [
    { id: 1, nombre: 'No identificado' },
    { id: 2, nombre: 'Perdido' },
    { id: 3, nombre: 'Prestado' },
    { id: 4, nombre: 'Reservado' },
    { id: 5, nombre: 'Disponible' },
    { id: 6, nombre: 'Inactivo' },
  ];


  constructor( private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModificarComponent>,
    private snackBar: MatSnackBar,
    private services: libroServices) {

      this.modificarform = this.fb.group({
        TITULO:           ['', Validators.required],
        ESTADO_ID:        ['', Validators.required],
      });
    }



    

  cerrarDialogo(): void {
    this.dialogRef.close();
  }

  objeto() {
    return {
      TITULO: this.modificarform.getRawValue().TITULO,
      ESTADO_ID: this.modificarform.getRawValue().ESTADO_ID
    };
  }
  
  onSubmit(): void {
    if (this.modificarform.valid) {
      const datos = this.objeto(); 
  
      this.services.actualizarEstadoLibro(datos.TITULO, datos.ESTADO_ID).subscribe(
        response => {
          console.log(response);
          alert('Estado actualizado con éxito');
          this.modificarform.reset();
        },
        error => {
          console.error(error);
          alert('Error al actualizar el estado');
        }
      );
    } else {
      alert('Formulario no válido. Verifique los campos.');
    }
  }
  

}
