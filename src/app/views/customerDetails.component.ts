import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { appService } from "../services/app.service";
import { CodeTablesService } from "../services/codeTables.service";
import { CustomerService } from "../services/customer.service";
import { ExternalService } from "../services/external.service";

@Component({
    selector: 'customer-detail',
    styles: [],
    templateUrl: './customerDetails.component.html'
})
export class CustomerDetailsComponent {

    edit: boolean = false;

    constructor(private router: Router, public service: CustomerService, public tables: CodeTablesService, public app: appService, public ext: ExternalService) {
    }



}