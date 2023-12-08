import { Module } from '@nestjs/common';
import { PodscatController } from './podscat.controller';
import { PodscatService } from './podscat.service';

@Module({
  controllers: [PodscatController],
  providers: [PodscatService]
})
export class PodscatModule {}
