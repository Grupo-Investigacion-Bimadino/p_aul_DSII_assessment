import { Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export enum PodscatStatus{
    PENDING="PENDING",
    IN_PROGRESS= "INPROGRESS",
    DONE = "DONE",
}
export interface Podscat1 extends Document{
    title: string;
    artist: string;
    duration: number;
    description:string;
    status:PodscatStatus;
}
    @Schema({timestamps:true})
    export class Podscat1 extends Document{
        @Prop({ require: true})
        title: string;

        @Prop({ require: true})
        artist: string;

        @Prop({ require: true})
        duration:number;

        @Prop({ require: true})
        description:string;

        @Prop({ require: true})
        status:PodscatStatus;


        }
    export const podscatschema= SchemaFactory.createForClass(Podscat1);

