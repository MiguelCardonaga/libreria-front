import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { baseURL } from '../shared/baseURL';


@Injectable({
    providedIn: 'root'
  })
  export class libroServices {
    httpOptions: object;
    constructor(private http: HttpClient) {
  
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    }
    
  
   
    buscarlibro(dato: any): Observable<any> {
        return this.http.post<any>(`${baseURL}/traerlibro`, dato, this.httpOptions);
      }

      crearLibro(dato: any): Observable<any> {
        return this.http.post<any>(`${baseURL}/registrarLibro`, dato, this.httpOptions);
      }

      actualizarEstadoLibro(nombre: string, estadoId: number): Observable<any> {
        return this.http.put<any>(
          `${baseURL}/actualizarEstado/${nombre}`,
          { ESTADO_ID: estadoId }, 
          this.httpOptions
        );
      } 

    
     
  
  }