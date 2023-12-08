import { Injectable } from '@nestjs/common';
import { Podscat, PodscatStatus } from './schema/podscat.entity';
@Injectable()
export class PodscatService {
  createPodscat(title: string, description: string) {
    throw new Error('Method not implemented.');
  }

  private  podscat: Podscat[] = [
    {
      id:"1",
      title: 'El Meta Verso',
      artist: 'Juan Perez',
      status: PodscatStatus.PENDING,
      description:'el mejor podscat',
      duration: 212,
    }
  ]
  getAllPodscat(){
    return this.podscat;
  }
}

  