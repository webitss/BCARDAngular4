import { Component } from "@angular/core";
import { appService } from "../services/app.service";
import { CodeTablesService } from "../services/codeTables.service";
import { CustomerService } from "../services/customer.service";

@Component({
    selector: 'moreDetails',
    styles: [`table {
       
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: right;
        padding: 8px;
    }

  
    .tooltip {
        position: relative;
        display: inline-block;

    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: white;
        color: black;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        top: 150%;
        left: 50%;
        margin-left: -60px;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
    `],
    templateUrl: './more-details.component.html'
})
export class MoreDetailsComponent {
    constructor(public service: appService, public tables: CodeTablesService) {
    }

    isEdit: boolean = false
    currentId: number;
    kind: string;

    edit(i: number, kind: string) {
        this.currentId = i;
        this.isEdit = true;
        this.kind = kind;
        if (kind === 'address') {

            this.service.addressEdit = true;
        }
        if (kind === 'mail') {

            this.service.emailEdit = true;
        }
        if (kind === 'phone') {

            this.service.telephoneEdit = true;
        }
    }

    canEdit(i: number, kind: string) {
        return !(this.isEdit && this.kind === kind && this.currentId === i);
    }

    delete() {
        let txt = "האם אתה בטוח שברצונך למחוק?";
        if (confirm(txt) == true) {
            console.log("delete")
        } else {
            console.log("not delete")
        }
    }

}