import {Component} from "@angular/core";
import {Router} from "@angular/router";
import { appService } from "../services/app.service";
import { CustomerService } from "../services/customer.service";

@Component({
    selector: 'documents',
    styles: [`table {
      
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
      
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
    template: `
        <div>

            <table class="table-bcard margin-t-50">
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>שם</th>
                    <th>סטטוס</th>
                    <th>ת. פקיעה</th>
                    <th>שם בודק</th>
                    <th>הערות</th>
                    <th></th>
                </tr>
                <tr>
                    <td class="icon-eye-12 icon-in-table" (click)="openPdf()"></td>
                    <td class="icon-full-star-18 icon-in-table"></td>
                    <td class="icon-delete-13 icon-in-table" (click)="delete()"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><select>
                        <option>אאאא</option>
                        <option>בבבב</option>
                    </select></td>
                    <td><select>
                        <option>אאאא</option>
                        <option>בבבב</option>
                    </select></td>
                    <td>
                        <div class="tooltip">
                            <div class="icon-Details-04 icon-in-table">
                                <span class="tooltiptext"> {{this.lastUpdateCust}}:עדכון אחרון </span>
                            </div>
                        </div>
                    </td>
                </tr>

            </table>

           <div class="save-details">

            <input class="btn-bcard" type="button" value="שמירה" (click)="this.lastUpdate()"/>
           </div>
        </div>
    `
})
export class DocumentsComponent {
    constructor(private router: Router,public service:appService,public cust:CustomerService) {

    }
    lastUpdateCust:string;
    lastUpdate()
    {
        this.lastUpdateCust=this.cust.currentCustomer.family_name;
        console.log(this.lastUpdateCust+"--------------------")
    }

    openPdf() {
        window.open('../assets/aaa.pdf');
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