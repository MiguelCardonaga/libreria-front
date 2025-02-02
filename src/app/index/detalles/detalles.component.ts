import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; 
import { libroServices } from 'src/app/services/libro.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetallesComponent {
  searchTerm: string = '';
  libro: any;   


  bookForm: FormGroup = this.fb.group({
    titulo: [''],
    autor: [''],
    anioPublicacion: [''],
    generoId: [''],
    estadoId: ['']
  });

  constructor(private dialogRef: MatDialogRef<DetallesComponent>,
    private fb: FormBuilder,
    private librosService: libroServices,
  ) {
    this.bookForm = this.fb.group({
      titulo: [{ value: '', disabled: true }],
      autor: [{ value: '', disabled: true }],
      anioPublicacion: [{ value: '', disabled: true }],
      generoId: [{ value: '', disabled: true }],
      estadoId: [{ value: '', disabled: true }]
    });

  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }


  buscarLibro(event: any) {
    
    

    let campo = event.target.value;
    console.log(campo);

    const dato = {
      NOMBRE: campo

    }


    this.librosService.buscarlibro(dato).subscribe(
      res => {
        console.log(res);
        if (res && res.length > 0) {
          this.libro = res[0]; // Tomamos el primer objeto
          
          // Rellenamos el formulario con los datos que recibimos
          this.bookForm.patchValue({
            titulo: this.libro.TITULO,
            autor: this.libro.AUTOR,
            anioPublicacion: this.libro['AÑO_PUBLICACION'],
            generoId: this.libro.GENERO,
            estadoId: this.libro.ESTADO
          });
        }else {
          // Si no hay resultados, podrías limpiar el form o mostrar un mensaje
          this.libro = null;
          this.bookForm.reset();
        }
        
      }
    )

  }
  
}
