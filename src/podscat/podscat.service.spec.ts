import { Test, TestingModule } from '@nestjs/testing';
import { PodscatService } from './podscat.service';

describe('PodscatService', () => {
  let service: PodscatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PodscatService],
    }).compile();

    service = module.get<PodscatService>(PodscatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
