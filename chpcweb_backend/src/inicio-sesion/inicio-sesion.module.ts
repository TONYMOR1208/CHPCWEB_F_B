import { Module } from '@nestjs/common';
import { InicioSesionController } from './inicio-sesion.controller';
import { InicioSesionService } from './inicio-sesion.service';

@Module({
  controllers: [InicioSesionController],
  providers: [InicioSesionService]
})
export class InicioSesionModule {}
