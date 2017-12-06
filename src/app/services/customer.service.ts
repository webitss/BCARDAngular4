import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { appService } from "./app.service";
import { AppProxy } from "../app.proxy";
import { ExternalService } from "./external.service";

@Injectable()
export class CustomerService {

    //the customer that his details presented now
    currentCustomer: Customer = new Customer();
    //used in detail component
    frmDetails: FormGroup;
    customers: Customer[];
    constructor(private service: ExternalService, private proxy: AppProxy) {
        this.frmDetails = new FormGroup({
            private_name: new FormControl({
                value: '',
                disabled: true
            }, Validators.required),
            family_name: new FormControl({
                value: this.currentCustomer.family_name,
                disabled: true
            }, Validators.required),
            birth_date: new FormControl({ value: this.currentCustomer.birth_date, disabled: true }, Validators.required),
            gender_id: new FormControl({
                value: this.currentCustomer.gender_id,
                disabled: true
            }, Validators.required),
            ID_number_country_code: new FormControl({
                value: this.currentCustomer.ID_number_country_code,
                disabled: true
            }, Validators.required),
            ID_number: new FormControl({ value: this.currentCustomer.ID_number, disabled: true }, Validators.required),
            ID_type_id: new FormControl({ value: this.currentCustomer.ID_type_id, disabled: true }, Validators.required),
            display_name: new FormControl({
                value: this.currentCustomer.display_name,
                disabled: true
            }, Validators.required),
            entity_class_id: new FormControl({
                value: this.currentCustomer.entity_class_id,
                disabled: true
            }, Validators.required),
            sub_type_id: new FormControl({
                value: this.currentCustomer.sub_type_id,
                disabled: true
            }, Validators.required),
            default_program_id: new FormControl({
                value: this.currentCustomer.default_program_id,
                disabled: true
            }, Validators.required),
            login_user_name: new FormControl({
                value: this.currentCustomer.login_user_name,
                disabled: true
            }, Validators.required),
            customer_status_id: new FormControl({
                value: this.currentCustomer.customer_status_id,
                disabled: true
            }, Validators.required),
            is_locked: new FormControl({ value: this.currentCustomer.is_locked, disabled: true }),
            is_loaded_files: new FormControl({ value: this.currentCustomer.is_loaded_files, disabled: true }),
            note: new FormControl({ value: this.currentCustomer.note, disabled: true }),
            elseType: new FormControl({ value: '', disabled: true }),
            entity_class_other: new FormControl({ value: /*this.currentCustomer.entity_class_other*/'', disabled: true })
        });
    }

    selectCustomer({ value, valid }) :number{
        let customer = this.customers.filter(c => c.Name === value.name);
        if (customer.length > 1)
            if (value.pass.length > 0)
                customer = this.customers.filter(c => c.ID_number === value.pass);
            else {
                alert('הקלד ת.ז. לזיהוי')
                return;
            }
        console.log(customer[0].id_customer);
        this.proxy.post('GetCustomer', { "iCustomerId": customer[0].id_customer }).then((res) => {
            console.log(res);
            this.currentCustomer = res.Result;
            this.currentCustomer.open_date = this.service.convertToDate(res.Result.open_date);
            console.log(this.currentCustomer.open_date);
            this.currentCustomer.close_date = this.service.convertToDate(res.Result.close_date);
            console.log(this.currentCustomer.close_date);
            this.currentCustomer.date_modified = this.service.convertToDate(res.Result.date_modified);
            console.log(this.currentCustomer.date_modified);
            this.currentCustomer.birth_date = this.service.convertToDate(res.Result.birth_date);
            console.log(this.currentCustomer.birth_date);
            console.log(this.currentCustomer);
            this.proxy.post('GetEntityCommDetails', { "iEntityId":this.currentCustomer.id_customer }).then(res => { this.currentCustomer.commDetails = res.Result; console.log(this.currentCustomer) });
            return this.currentCustomer.id_customer;
        }).catch((err) => console.log(err.nvErrorMessage));

    }
    getCustomersNames(): Promise<any> {
        let names: string[] = [];
        //get all the customers names and id numbers
        return this.proxy.post("GetCustomers", null).then((res) => {
            console.log(res);
            this.customers = (res as any).Result;
            this.customers.forEach(c => names.push(c.Name));
            return names;
        }).catch((err) => console.log(err.nvErrorMessage));

    }
    saveDetails({ value, valid }) {
        let obj = value;
        //this.service.disable(this.frmDetails);
        console.log(value);

        let id = this.currentCustomer.id_customer;
        obj.id_customer = this.currentCustomer.id_customer;
        obj.customer_status_id = value.customer_status_id;
        obj.private_name = value.private_name;
        obj.family_name = value.family_name;
        obj.ID_number = value.ID_number;
        obj.ID_number_country_code = value.ID_number_country_code;
        obj.birth_date = this.service.getJsonDate(new Date(value.birth_date));
        obj.ID_type_id = value.ID_type_id;
        obj.open_date = this.service.getJsonDate(this.currentCustomer.open_date);
        obj.close_date = this.service.getJsonDate(this.currentCustomer.close_date);
        obj.date_modified = this.service.getJsonDate(this.currentCustomer.date_modified);
        obj.is_locked = (value.is_locked) ? value.is_locked : false;
        obj.is_loaded_files = (value.is_locked) ? value.is_loaded_files : false;
        console.log(JSON.stringify({ obj: obj }));
        this.proxy.post('UpdateCustomer', { obj: obj }).then((err) => console.log(err.nvErrorMessage)).catch((err) => console.log(err.nvErrorMessage));

    }
}