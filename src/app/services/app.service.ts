import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Customer } from "../models/customer.model";
import { User } from "../models/user.model";
import { AppProxy } from "../app.proxy";
import { KeyValue } from "../models/keyValue.model";
import { CodeTablesService } from "../services/codeTables.service";
import { Agent } from "../models/agent.model";
import { CustomerService } from "./customer.service";
import { AgentService } from "./agent.service";
import { CustomerCommDetails } from "../models/customerCommDetails.model";
import { Address } from "../models/customer_address.model";
import { Telephone } from "../models/customer_telephones.model";
import { Email } from "../models/customer_emails.model";
import { Card } from "../models/card.model";
import { Wallet } from "../models/wallet.model";
import { Time } from "@angular/common";

@Injectable()
export class appService {


    //the current user
    currentUser: User = new User();
    //the details of the login user
    //used in login component
    frmLogin: FormGroup;
    //the details of the customer/agent
    //used in detail component
    frmDetails: FormGroup;
    //the preferences details of the customer/agent
    //used in preferences component
    frmPreferences;
    //the cards details of the customer/agent
    //used in cards component
    frmCards: FormGroup;
    //the cards details of the customer/agent
    //used in purses component
    frmWallets: FormGroup;
    //the details of the selected customer/agent
    //used in container component
    frmName: FormGroup;
    commDetails: CustomerCommDetails;
    lastUpdateCust: string;

    id: number;
    names: string[];
    nameFilter: string[];
    flag: boolean = false;
    customer: boolean = true;
    newAddress: Address = new Address();
    newTelephone: Telephone = new Telephone();
    newEmail: Email = new Email();
    addressEdit: boolean = false;
    telephoneEdit: boolean = false;
    emailEdit: boolean = false;
    currentWallet: Wallet = this.getWallets()[0];

    constructor(private router: Router, private proxy: AppProxy, private codeTables: CodeTablesService, private cust: CustomerService, private agnt: AgentService) {
        cust.getCustomersNames().then((res) => this.names = res);
        this.frmLogin = new FormGroup({
            login_user_name: new FormControl("", Validators.required),
            login_password: new FormControl("", Validators.required)
        });


        this.frmCards = new FormGroup({
            login_ivr_password: new FormControl({ value: '', disabled: true }, Validators.required),
            establishment_date: new FormControl({ value: '', disabled: true }, Validators.required),
            balance: new FormControl({ value: '', disabled: true }, Validators.required),
            balance_date: new FormControl({ value: '', disabled: true }, Validators.required),
            close_date: new FormControl({ value: '', disabled: true }, Validators.required),
            isLocked: new FormControl({ value: '', disabled: true }),
            defaultProgramId: new FormControl({ value: '', disabled: true }, Validators.required),
            close: new FormControl({ value: '', disabled: true }, Validators.required)
        });
        this.frmName = new FormGroup({
            name: new FormControl(""),
            pass: new FormControl("")
        });
        this.frmPreferences = new FormGroup({
            language: new FormControl("", Validators.required),
            timeZone: new FormControl("", Validators.required),
            smsEvery: new FormControl("", Validators.required),
            sms: new FormControl(Validators.required),
            preference: new FormControl(Validators.required),
        });
        this.frmWallets = new FormGroup({
            coin: new FormControl({ value: '', disabled: true }, Validators.required),
            relation: new FormControl({ value: '', disabled: true }, Validators.required),
            credit: new FormControl({ value: '', disabled: true }, Validators.required),
            curBalanceDate: new FormControl({ value: '', disabled: true }, Validators.required),
            curBalance: new FormControl({ value: '', disabled: true }, Validators.required),
            close: new FormControl({ value: '', disabled: true }, Validators.required),
            create: new FormControl({ value: '', disabled: true }, Validators.required),
            defaultProgram: new FormControl({ value: '', disabled: true }, Validators.required),
            IVR: new FormControl({ value: '', disabled: true }, Validators.required)
        });
    };



    search(event) {
        if (event.target.value.length >= 3) {
            this.nameFilter = this.names.filter(n => n.startsWith(event.target.value));
        }
        else
            this.nameFilter = [];
    }

    changeDefault(list: any[], id: number) {
        let a = list.find(l => l.is_default === true && l.type_id === id);
        if (a)
            a[0].is_default = false;
        return true;
    }

    deleteCommDetail(kind: number, id: number) {
        if (kind === 5 || kind === 6)
            this.proxy.post('RemoveEntityAddress', { "iCommunicationId": id });
        else if (kind >= 1 && kind <= 4)
            this.proxy.post('RemoveEntityTelephone', { "iCommunicationId": id });
        else if (kind >= 7 && kind <= 9)
            this.proxy.post('RemoveEntityEmail', { "iCommunicationId": id });
    }

    saveMoreDetails() {
        console.log(this.addressEdit);
        if (this.addressEdit === true)
            this.getCommDetails().AddressList.forEach(a => {
                a.date_modified = new Date();
                a.initiator_id = this.currentUser.id_user;
                this.proxy.post('UpdateEntityAddress', { "obj": a }).then(res => console.log(res))
            });
        if (this.telephoneEdit === true)
            this.getCommDetails().TelephoneList.forEach(t => {
                t.date_modified = new Date();
                t.initiator_id = this.currentUser.id_user;
                this.proxy.post('UpdateEntityTelephone', { "obj": t })
            });
        if (this.emailEdit === true)
            this.getCommDetails().EmailList.forEach(e => {
                e.date_modified = new Date();
                e.initiator_id = this.currentUser.id_user;
                this.proxy.post('UpdateEntityEmail', { "obj": e })
            });
        if (this.newAddress.address) {
            if (this.newAddress.is_default) {
                let a = this.getCommDetails().AddressList.find(l => (l as any).is_default === true && l.type_id === this.newAddress.type_id);
                if (a)
                    a[0].is_default = false;
            }
            this.newAddress.date_modified = new Date();
            this.newAddress.initiator_id = this.currentUser.id_user;
            this.proxy.post('InsertEntityAddress', { obj: this.newAddress });
            this.newAddress = new Address();
        }
        if (this.newTelephone.telephone) {
            if (this.newTelephone.is_default) {
                let a = this.getCommDetails().TelephoneList.find(l => (l as any).is_default === true && l.type_id === this.newTelephone.type_id);
                if (a)
                    a[0].is_default = false;
            }
            this.newTelephone.date_modified = new Date();
            this.newTelephone.initiator_id = this.currentUser.id_user;
            this.proxy.post('InsertEntityTelephone', { obj: this.newTelephone });
            this.newTelephone = new Telephone();
        }
        if (this.newEmail.email) {
            if (this.newEmail.is_default) {
                let a = this.getCommDetails().EmailList.find(l => (l as any).is_default === true && l.type_id === this.newEmail.type_id);
                if (a)
                    a[0].is_default = false;
            }
            this.newEmail.date_modified = new Date();
            this.newEmail.initiator_id = this.currentUser.id_user;
            this.proxy.post('InsertEntityEmail', { obj: this.newEmail });
            this.newEmail = new Email();
        }

    }

    login({ value, valid }) {
        this.router.navigate(['container']);
        this.proxy.post("Login", JSON.stringify(value)).then((res) => {
            this.currentUser = res;
            this.router.navigate(['container'])
        }).catch((err) => console.log(err.nvErrorMessage));
    }

    logout() {
        this.currentUser = new User();
        this.frmLogin.reset();
        this.router.navigate(['login']);
    }


    loadCards() {
        if (this.customer)
            //if (this.cust.currentCustomer.cardsList.length === 0)
            this.proxy.post('GetExt_Card', { "iEntityId": this.cust.currentCustomer.id_customer }).then(res => this.cust.currentCustomer.cardsList = res.Result);
        else
            //if (this.agnt.currentAgent.cardsList.length === 0)
            this.proxy.post('GetExt_Card', { "iEntityId": this.agnt.currentAgent.id_agent }).then(res => this.agnt.currentAgent.cardsList = res.Result);
    }

    loadWallets() {
        if (this.customer)
            //if (this.cust.currentCustomer.cardsList.length === 0)
            this.proxy.post('GetWallets', { "iEntityId": this.cust.currentCustomer.id_customer }).then(res => { this.cust.currentCustomer.walletsList = res.Result; this.currentWallet = this.getWallets()[0]; });
        else
            //if (this.agnt.currentAgent.cardsList.length === 0)
            this.proxy.post('GetWallets', { "iEntityId": this.agnt.currentAgent.id_agent }).then(res => { this.agnt.currentAgent.walletsList = res.Result; this.currentWallet = this.getWallets()[0]; });

    }

    getCurrentWallet() {
        if (this.customer) {
            console.log(this.cust.currentCustomer.walletsList);
            return this.cust.currentCustomer.walletsList[0];
        } else {
            console.log(this.agnt.currentAgent.walletsList);
            return this.agnt.currentAgent.walletsList[0];
        }
    }

    loadPreferences() {
        if (this.customer)
            //if (this.cust.currentCustomer.cardsList.length === 0)
            this.proxy.post('GetPreferences', { "iEntityId": this.cust.currentCustomer.id_customer }).then(res => this.cust.currentCustomer.PreferenceList = res.Result);
        else
            //if (this.agnt.currentAgent.cardsList.length === 0)
            this.proxy.post('GetPreferences', { "iEntityId": this.agnt.currentAgent.id_agent }).then(res => this.agnt.currentAgent.PreferenceList = res.Result);
    }

    getCards() {
        if (this.customer)
            return this.cust.currentCustomer.cardsList;
        else
            return this.agnt.currentAgent.cardsList;
    }

    getWallets() {
        if (this.customer)
            return this.cust.currentCustomer.walletsList;
        else
            return this.agnt.currentAgent.walletsList;
    }

    getPreferences() {
        if (this.customer)
            return this.cust.currentCustomer.PreferenceList;
        else
            return this.agnt.currentAgent.PreferenceList;
    }
    setCurrentWallet(num: number) {
        this.getWallets()[num];


    }


    changeCA() {
        if (this.customer) { this.cust.getCustomersNames().then(res => this.names = res); }
        else { this.agnt.getAgentsNames().then(res => this.names = res); }
    }


    select({ value, valid }) {
        if (this.customer)
            this.id = this.cust.selectCustomer({ value, valid });
        else
            this.id = this.agnt.selectAgent({ value, valid });
        this.flag = true;
    }

    getCommDetails() {

        if (this.customer) {
            //this.commDetails = JSON.parse(JSON.stringify(this.cust.currentCustomer.commDetails));
            return this.cust.currentCustomer.commDetails;
        }
        else {
            //this.commDetails = Object.assign({}, this.agnt.currentAgent.commDetails);
            return this.agnt.currentAgent.commDetails;
        }

    }

    resetCurrent() {
        this.nameFilter.splice(0, this.nameFilter.length);
        if (this.customer)
            this.cust.currentCustomer = new Customer();
        else
            this.agnt.currentAgent = new Agent();
        this.customer = true;
    }





}