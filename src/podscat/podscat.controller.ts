import { Body,Controller,Get, Post } from '@nestjs/common';
import { PodscatService } from './podscat.service';
import {CreatepodscatDto} from './dto/podscat.dto';
@Controller('podscat')
export class PodscatController {
    constructor(private readonly podscatService: PodscatService) {}

    @Get()
    podscat(){
      return this.podscatService.getAllPodscat
    }
    @Post()
    createPodscat(@Body()newpodscat:CreatepodscatDto){
      return this.podscatService.createPodscat(newpodscat.title
        , newpodscat.description)
   }
   
}