import { Module } from '@nestjs/common';
import { RecuperacionContrasenaController } from './recuperacion-contrasena.controller';
import { RecuperacionContrasenaService } from './recuperacion-contrasena.service';

@Module({
  controllers: [RecuperacionContrasenaController],
  providers: [RecuperacionContrasenaService]
})
export class RecuperacionContrasenaModule {}
