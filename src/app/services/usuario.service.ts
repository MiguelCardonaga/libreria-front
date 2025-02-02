import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { baseURL } from '../shared/baseURL';


@Injectable({
    providedIn: 'root'
  })
  export class usuarioServices {
    httpOptions: object;
    constructor(private http: HttpClient) {
  
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    }
    
  
    // getUsers(): Observable<any>{
    //  return this.http.get<any>(`${baseURL}/traertodo`);
    //   }  

    registerUser(userData: any): Observable<any> {
        return this.http.post<any>(`${baseURL}/register`, userData, this.httpOptions);
      }

    
      loginuser(userData: any): Observable<any> {
        return this.http.post<any>(`${baseURL}/login`, userData, this.httpOptions);
      }  
  
  }