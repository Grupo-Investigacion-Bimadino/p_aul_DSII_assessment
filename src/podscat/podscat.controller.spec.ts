import { Test, TestingModule } from '@nestjs/testing';
import { PodscatController } from './podscat.controller';

describe('PodscatController', () => {
  let controller: PodscatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PodscatController],
    }).compile();

    controller = module.get<PodscatController>(PodscatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
