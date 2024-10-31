import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(data: { nombre: string; correo: string; contrasena: string }) {
    const hashedPassword = await bcrypt.hash(data.contrasena, 10);
    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        correo: data.correo,
        contrasena: hashedPassword,
      },
    });
  }

  async login(data: { correo: string; contrasena: string }) {
    const user = await this.prisma.usuario.findUnique({ where: { correo: data.correo } });
    if (user && (await bcrypt.compare(data.contrasena, user.contrasena))) {
      return { message: 'Login successful' };
    }
    return { message: 'Invalid credentials' };
  }

  async requestPasswordReset(correo: string) {
    const user = await this.prisma.usuario.findUnique({ where: { correo } });
    if (!user) throw new Error('User not found');
    return this.prisma.solicitudRecuperacion.create({
      data: {
        usuarioId: user.id,
        fecha_solicitud: new Date(),
      },
    });
  }
}
