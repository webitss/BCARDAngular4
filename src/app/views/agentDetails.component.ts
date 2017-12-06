import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { appService } from "../services/app.service";
import { CodeTablesService } from "../services/codeTables.service";
import { AgentService } from "../services/agent.service";
import { ExternalService } from "../services/external.service";

@Component({
    selector: 'agent-detail',
    styles: [],
    templateUrl: './agentDetails.component.html'
})
export class AgentDetailsComponent {

    edit: boolean = false;

    constructor(private router: Router, public service: AgentService, public tables: CodeTablesService,public app:appService,public ext:ExternalService) {
    }



}