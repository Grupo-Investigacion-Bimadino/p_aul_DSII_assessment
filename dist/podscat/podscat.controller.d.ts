import { PodscatService } from './podscat.service';
import { CreatepodscatDto } from './dto/podscat.dto';
export declare class PodscatController {
    private readonly podscatService;
    constructor(podscatService: PodscatService);
    podscat(): () => import("./schema/podscat.entity").Podscat[];
    createPodscat(newpodscat: CreatepodscatDto): void;
}
