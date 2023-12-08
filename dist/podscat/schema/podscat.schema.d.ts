/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare enum PodscatStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "INPROGRESS",
    DONE = "DONE"
}
export interface Podscat1 extends Document {
    title: string;
    artist: string;
    duration: number;
    description: string;
    status: PodscatStatus;
}
export declare class Podscat1 extends Document {
    title: string;
    artist: string;
    duration: number;
    description: string;
    status: PodscatStatus;
}
export declare const podscatschema: import("mongoose").Schema<Podscat1, import("mongoose").Model<Podscat1, any, any, any, Document<unknown, any, Podscat1> & Podscat1 & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Podscat1, Document<unknown, {}, import("mongoose").FlatRecord<Podscat1>> & import("mongoose").FlatRecord<Podscat1> & {
    _id: import("mongoose").Types.ObjectId;
}>;
