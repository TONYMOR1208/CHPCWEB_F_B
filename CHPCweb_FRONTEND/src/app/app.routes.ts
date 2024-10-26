import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProductoComponent } from './producto/producto.component';
import { RecuperacionContrasenaComponent } from './recuperacion-contrasena/recuperacion-contrasena.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'carrito', component: CarritoComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'recuperacion-contrasena', component: RecuperacionContrasenaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
