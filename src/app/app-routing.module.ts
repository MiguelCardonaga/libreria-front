import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, // Inicio siempre accesible
  { path: 'index', component: IndexComponent, canActivate: [AuthGuard] }, // Protegido con AuthGuard
  { path: '**', redirectTo: '/inicio' } // Todo lo desconocido redirige a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
