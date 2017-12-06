import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { appService } from "./app.service";
import { AppProxy } from "../app.proxy";

@Injectable()
export class ExternalService {
    enable(frm: FormGroup) {
        Object.keys(frm.controls).forEach(key => {
            frm.get(key).enable()
        });
    }

    disable(frm: FormGroup) {
        Object.keys(frm.controls).forEach(key => {
            frm.get(key).disable()
        });
    }

    convertToDate(date: string): Date {
        console.log(date);
        if (date !== null)
            return new Date(parseInt(date.substring(date.indexOf("(") + 1, (date.indexOf("+") != -1 ? date.indexOf("+") : date.indexOf(")")))));
        else
            return new Date();
    }

    getDateString(date: Date): string {
        console.log(date);
        if (date&&date !== new Date())
            return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        else
            return "";
    }

    getJsonDate(date: Date): string {
        return `/Date(${Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())})/`;
    }
}