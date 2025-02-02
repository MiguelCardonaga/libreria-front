import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token'); // Verificamos si hay token

    if (!token) {
      this.router.navigate(['/inicio']); // Si no hay token, redirige a inicio
      return false;
    }

    return true; // Si hay token, permite la navegación
  }
}
