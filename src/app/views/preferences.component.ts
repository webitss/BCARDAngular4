import {Component} from "@angular/core";
import {appService} from "../services/app.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { CodeTablesService } from "../services/codeTables.service";

@Component({
  selector: 'preferrences',
    styles : [`
      table {
       
          border-collapse: collapse;
          width: 45%;
      }

      td, th {
          border: 1px solid #dddddd;
      
          padding: 8px;
      }

    
  `],
    template: `
        <div dir="rtl">
            <form [formGroup]="service.frmPreferences">
                <table class="table-bcard margin-t-50">
                    <tr>
                        <th>סוג</th>
                        <th>ערך</th>
                    </tr>
                    <tr *ngFor="let preference of service.getPreferences()">
                       <td><label>{{preference.preference}}</label></td>
                       <td>
                       <select [(ngModel)]="preference.preference_type_id">
                            <option [ngValue]="p.iId" *ngFor="let p of tables.preferenceTypeList">{{p.nvName}}</option>
                       </select></td>
                    </tr>
                </table>


                <div class="save-details">
                <input class="btn-bcard" type="submit" value="שמירה" [disabled]="!service.frmPreferences.valid"></div>
            </form>
        </div>
    `})
export class PreferrencesComponent implements OnInit {
    ngOnInit(): void {
        this.service.loadPreferences();
    }
  constructor(public service:appService,public tables:CodeTablesService){

  }
}