import { Test, TestingModule } from '@nestjs/testing';
import { EdicionService } from './edicion.service';

describe('EdicionService', () => {
  let service: EdicionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdicionService],
    }).compile();

    service = module.get<EdicionService>(EdicionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
