export enum PodscatStatus{
    PENDING="PENDING",
    IN_PROGRESS= "INPROGRESS",
    DONE = "DONE",
}
export class Podscat{
    id: string;
    title:string;
    artist:string;
    description: string;
    status: PodscatStatus;
    duration:number;
}