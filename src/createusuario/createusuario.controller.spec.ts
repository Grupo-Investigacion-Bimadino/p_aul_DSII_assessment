import { Test, TestingModule } from '@nestjs/testing';
import { CreateusuarioController } from './createusuario.controller';

describe('CreateusuarioController', () => {
  let controller: CreateusuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateusuarioController],
    }).compile();

    controller = module.get<CreateusuarioController>(CreateusuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
