import {Time} from "@angular/common";

export class Customer_service{
    customers_service_id:number;
    id_user:number;
    id_entity:number;
    customers_service_type_id:number;
    inout:number;
    media_type_id:number;
    subject:string;
    contents:string;
    summary:string;
    time_start:Time;
    time_end:Time;

    constructor(){

    }
}