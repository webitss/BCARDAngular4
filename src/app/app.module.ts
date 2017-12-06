import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './views/app.component';
import { LoginComponent } from "./views/login.component";
import { ContainerComponent } from "./views/container.component";
import { RouterModule } from "@angular/router";
import { MoreDetailsComponent } from "./views/more-details.component";
import { CardsComponent } from "./views/cards.component";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { appService } from "./services/app.service";
import { WalletsComponent } from "./views/wallets.component";
import { DialogComponent } from "./views/dialog.component";
import { DocumentsComponent } from "./views/documents.component";
import { GroupsMembersComponent } from "./views/groups-members.component";
import { AuthService } from "./auth/auth.service";
import { PreferrencesComponent } from "./views/preferences.component";
import { ActionsComponent } from "./views/actions.component";
import { LoginSettingsComponent } from "./views/login-settings.component";
import { HttpClientModule } from "@angular/common/http";
import { AppProxy } from "./app.proxy";
import { ServiceComponent } from "./views/customer_service.component";
import { CodeTablesService } from './services/codeTables.service';
import { AgentDetailsComponent } from './views/agentDetails.component';
import { CustomerDetailsComponent } from './views/customerDetails.component';
import { CustomerService } from './services/customer.service';
import { AgentService } from './services/agent.service';
import { ExternalService } from './services/external.service';
import { StakeholdersComponent } from './views/stakeholders.component';
import { UsersComponent } from './views/users.component';


@NgModule({
    declarations: [
        AppComponent, LoginComponent, ContainerComponent, ActionsComponent,UsersComponent, DialogComponent, LoginSettingsComponent, PreferrencesComponent, GroupsMembersComponent,  MoreDetailsComponent, CardsComponent, WalletsComponent, DocumentsComponent, ServiceComponent, AgentDetailsComponent,StakeholdersComponent, CustomerDetailsComponent
    ],
    imports: [
        BrowserModule, PdfViewerModule, ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule.forRoot(
            [
                { path: '', component: LoginComponent },
                {
                    path: 'container',
                    component: ContainerComponent,
                    children: [{ path: 'customer', component: CustomerDetailsComponent },
                    { path: 'agent', component: AgentDetailsComponent },
                    { path: 'moreDetails', component: MoreDetailsComponent },
                    { path: 'cards', component: CardsComponent },
                    { path: 'loginSettings', component: LoginSettingsComponent },
                    { path: 'actions', component: ActionsComponent },
                    { path: 'stakeholders', component: StakeholdersComponent },
                    { path: 'preference', component: PreferrencesComponent },
                    { path: 'groups', component: GroupsMembersComponent },
                    { path: 'users', component: UsersComponent },
                    { path: 'documents', component: DocumentsComponent },
                    { path: 'service', component: ServiceComponent },
                    { path: 'purses', component: WalletsComponent }]
                }, { path: 'login', component: LoginComponent }
            ])
    ],
    providers: [appService, AuthService, AppProxy, CodeTablesService,CustomerService,AgentService,ExternalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
