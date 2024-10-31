import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() data: { nombre: string; correo: string; contrasena: string }) {
    return this.authService.register(data);
  }

  @Post('login')
  async login(@Body() data: { correo: string; contrasena: string }) {
    return this.authService.login(data);
  }

  @Post('reset-password')
  async resetPassword(@Body('correo') correo: string) {
    return this.authService.requestPasswordReset(correo);
  }
}
