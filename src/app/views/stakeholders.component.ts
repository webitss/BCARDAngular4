import {Component} from "@angular/core";
import {appService} from "../services/app.service";
import { ExternalService } from "../services/external.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { AppProxy } from "../app.proxy";

@Component({
    selector: 'stakeholders',
    styles: [`

    table {
        
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
    templateUrl: './stakeholders.component.html'
})
export class StakeholdersComponent  {
   
    constructor(public service:ExternalService,public app:appService,private proxy:AppProxy){

    }
    delete(){

    }
    showDialog = false;
}