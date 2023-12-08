import { Test, TestingModule } from '@nestjs/testing';
import { EdicionController } from './edicion.controller';

describe('EdicionController', () => {
  let controller: EdicionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdicionController],
    }).compile();

    controller = module.get<EdicionController>(EdicionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
