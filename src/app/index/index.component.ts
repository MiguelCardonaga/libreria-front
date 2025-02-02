import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetallesComponent } from './detalles/detalles.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private dialog: MatDialog) {}



  abrirDialogoDetalles(): void {
    this.dialog.open(DetallesComponent, {
      width: '500px',
      height: 'auto',
      maxHeight: '80vh',
      disableClose: true,
      hasBackdrop: true,
      autoFocus: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-dialog-container'
    });
  }
  
  abrirDialogoCrear(): void {
    this.dialog.open(CrearComponent, {
      width: '500px',
      height: 'auto',
      maxHeight: '80vh',
      disableClose: true,
      hasBackdrop: true,
      autoFocus: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-dialog-container'
    });
  }

  abrirModificar(): void {
    this.dialog.open(ModificarComponent, {
      width: '500px',
      height: 'auto',
      maxHeight: '80vh',
      disableClose: true,
      hasBackdrop: true,
      autoFocus: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-dialog-container'
    });
  }

}
