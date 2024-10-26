import { Test, TestingModule } from '@nestjs/testing';
import { RecuperacionContrasenaService } from './recuperacion-contrasena.service';

describe('RecuperacionContrasenaService', () => {
  let service: RecuperacionContrasenaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecuperacionContrasenaService],
    }).compile();

    service = module.get<RecuperacionContrasenaService>(RecuperacionContrasenaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
