import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})


export class InicioComponent  implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
    localStorage.clear()
    console.log(localStorage);

  }


  vista: string = '';

  mostrarLogin() {
    this.vista = 'login';
  }

  mostrarRegister() {
    this.vista = 'register';
  }

  mostrarIncio() {
    this.vista = '';
  }



}
