import { Podscat } from './schema/podscat.entity';
export declare class PodscatService {
    createPodscat(title: string, description: string): void;
    private podscat;
    getAllPodscat(): Podscat[];
}
