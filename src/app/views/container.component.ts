import { Component } from "@angular/core";
import { appService } from "../services/app.service";
import { AuthService } from "../auth/auth.service";
import { CustomerService } from "../services/customer.service";
import { AgentService } from "../services/agent.service";
import { Router } from "@angular/router";

@Component({
    selector: 'container',
    styles: [
        ``
    ],
    templateUrl: './container.component.html'
})
export class ContainerComponent {
    constructor(public service: appService, public auth: AuthService, public cust: CustomerService, public agnt: AgentService, public router: Router) {
    }


    name: string;


    selectChanged(event) {
        if (event.target.options[event.target.selectedIndex].id == 'customer')
            this.service.customer = true;
        else
            this.service.customer = false;
        this.service.changeCA();
    }

    change() {
        this.service.resetCurrent();
        this.service.flag = false;
        this.service.frmName.reset();
        this.router.navigate(['/container']);
    }
}