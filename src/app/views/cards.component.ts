import {Component} from "@angular/core";
import {appService} from "../services/app.service";
import { ExternalService } from "../services/external.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { AppProxy } from "../app.proxy";

@Component({
    selector: 'cards',
    styles: [`

        table {
           
            border-collapse: collapse;
          
        }

        td, th {
            border: 1px solid #dddddd;
                      padding: 8px;
        }

       
    `],
    templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
    ngOnInit(): void {
        this.app.loadCards();
    }
    constructor(public service:ExternalService,public app:appService,private proxy:AppProxy){

    }
    delete(){

    }
    showDialog = false;
}