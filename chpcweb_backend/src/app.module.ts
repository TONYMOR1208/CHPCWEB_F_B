import { Module } from '@nestjs/common';

import { CarritoModule } from './carrito/carrito.module';
import { InicioSesionModule } from './inicio-sesion/inicio-sesion.module';
import { PrincipalModule } from './principal/principal.module';
import { ProductoModule } from './producto/producto.module';
import { RecuperacionContrasenaModule } from './recuperacion-contrasena/recuperacion-contrasena.module';
import { RegistroModule } from './registro/registro.module';



@Module({
  imports: [CarritoModule, InicioSesionModule, PrincipalModule, ProductoModule, RecuperacionContrasenaModule, RegistroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
