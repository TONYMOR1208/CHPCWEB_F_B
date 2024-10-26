import { Test, TestingModule } from '@nestjs/testing';
import { RecuperacionContrasenaController } from './recuperacion-contrasena.controller';

describe('RecuperacionContrasenaController', () => {
  let controller: RecuperacionContrasenaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecuperacionContrasenaController],
    }).compile();

    controller = module.get<RecuperacionContrasenaController>(RecuperacionContrasenaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
