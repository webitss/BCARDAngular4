import {Component} from "@angular/core";
import {appService} from "../services/app.service";
import { ExternalService } from "../services/external.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { CodeTablesService } from "../services/codeTables.service";

@Component({
    selector: 'wallets',
    styles: [`   table {
        
         border-collapse: collapse;
       
     }

     td, th {
         border: 1px solid #dddddd;
                   padding: 8px;
     }

  `],
    templateUrl: './wallets.component.html'
})
export class WalletsComponent implements OnInit {
    ngOnInit(): void {
        this.app.loadWallets();
    }
    isClosed: boolean = false;
    isEdit: boolean = false;
    showDialog = false;
    constructor(public service:ExternalService,public app:appService,public tables:CodeTablesService){

    }
    close() {
        this.isClosed = true;
    }



}