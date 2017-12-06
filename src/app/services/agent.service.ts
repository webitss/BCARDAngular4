import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Agent } from "../models/agent.model";
import { appService } from "./app.service";
import { AppProxy } from "../app.proxy";
import { ExternalService } from "./external.service";

@Injectable()
export class AgentService {

    //the agent that his datails presented now
    currentAgent: Agent = new Agent();
    //used in detail component
    frmDetails: FormGroup;
    agents: Agent[];

    constructor(private service: ExternalService, private proxy: AppProxy) {
        this.frmDetails = new FormGroup({
            private_name: new FormControl({
                value: '',
                disabled: true
            }, Validators.required),
            family_name: new FormControl({
                value: this.currentAgent.family_name,
                disabled: true
            }, Validators.required),
            establishment_date: new FormControl({ value: this.currentAgent.establishment_date, disabled: true }, Validators.required),
            gender_id: new FormControl({
                value: (this.currentAgent.gender_id === 1) ? 'זכר' : 'נקבה',
                disabled: true
            }, Validators.required),
            ID_number_country_code: new FormControl({
                value: this.currentAgent.ID_number_country_code,
                disabled: true
            }, Validators.required),
            ID_number: new FormControl({ value: this.currentAgent.ID_number, disabled: true }, Validators.required),
            ID_type_id: new FormControl({ value: this.currentAgent.ID_type_id, disabled: true }, Validators.required),
            display_name: new FormControl({
                value: this.currentAgent.display_name,
                disabled: true
            }, Validators.required),
            entity_class_id: new FormControl({
                value: this.currentAgent.entity_class_id,
                disabled: true
            }, Validators.required),
            sub_type_id: new FormControl({
                value: this.currentAgent.sub_type_id,
                disabled: true
            }, Validators.required),
            default_program_id: new FormControl({
                value: this.currentAgent.default_program_id,
                disabled: true
            }, Validators.required),
            login_user_name: new FormControl({
                value: this.currentAgent.login_user_name,
                disabled: true
            }, Validators.required),
            agent_status_id: new FormControl({
                value: this.currentAgent.agent_status_id,
                disabled: true
            }, Validators.required),
            is_locked: new FormControl({ value: this.currentAgent.is_locked, disabled: true }),
            is_loaded_files: new FormControl({ value: this.currentAgent.is_loaded_files, disabled: true }),
            note: new FormControl({ value: this.currentAgent.note, disabled: true }),
            entity_class_other: new FormControl({ value: this.currentAgent.entity_class_other, disabled: true }),
            position_type_id: new FormControl({ value: this.currentAgent.position_type_id, disabled: true }, Validators.required),
            position_type_other: new FormControl({ value: this.currentAgent.position_type_other, disabled: true })
        });
    }
    selectAgent({ value, valid }): number {

        let agent = this.agents.filter(a => a.Name === value.name);
        if (agent.length > 1)
            if (value.pass.length > 0)
                agent = this.agents.filter(a => a.ID_number === value.pass);
            else {
                alert('הקלד ת.ז. לזיהוי')
                return;
            }
        this.proxy.post('GetAgent', { "iAgentId": agent[0].id_agent }).then((res) => {
            this.currentAgent = res.Result;
            this.currentAgent.open_date = this.service.convertToDate(res.Result.open_date);

            this.currentAgent.close_date = this.service.convertToDate(res.Result.close_date);

            this.currentAgent.date_modified = this.service.convertToDate(res.Result.date_modified);

            this.currentAgent.establishment_date = this.service.convertToDate(res.Result.establishment_date);
            console.log('before getting comDetails:' + this.currentAgent);
            this.proxy.post('GetEntityCommDetails', { "iEntityId": this.currentAgent.id_agent }).then(res => { this.currentAgent.commDetails = res.Result; console.log(this.currentAgent) });
            return this.currentAgent.id_agent;
        }).catch((err) => console.log(err.nvErrorMessage));


    }
    getAgentsNames(): Promise<any> {
        let names: string[] = [];
        //get all the customers names and id numbers
        return this.proxy.post("GetAgents", null).then((res) => {
            console.log(res);
            this.agents = (res as any).Result;
            this.agents.forEach(c => names.push(c.Name));
            return names;
        }).catch((err) => console.log(err.nvErrorMessage));
    }
    saveDetails({ value, valid }) {
        let obj = value;
        this.service.disable(this.frmDetails);
        console.log(value);

        let id = this.currentAgent.id_agent;
        obj.id_agent = this.currentAgent.id_agent;
        obj.agent_status_id = value.agent_status_id;
        obj.private_name = value.private_name;
        obj.family_name = value.family_name;
        obj.ID_number = value.ID_number;
        obj.ID_number_country_code = value.ID_number_country_code;
        obj.birth_date = this.service.getJsonDate(new Date(value.birth_date));
        obj.ID_type_id = value.ID_type_id;
        obj.open_date = this.service.getJsonDate(this.currentAgent.open_date);
        obj.close_date = this.service.getJsonDate(this.currentAgent.close_date);
        obj.date_modified = this.service.getJsonDate(this.currentAgent.date_modified);
        obj.is_locked = (value.is_locked) ? value.is_locked : false;
        obj.is_loaded_files = (value.is_locked) ? value.is_loaded_files : false;
        console.log(JSON.stringify({ obj: obj }));
        this.proxy.post('UpdateAgent', { obj: obj }).then((err) => console.log(err.nvErrorMessage)).catch((err) => console.log(err.nvErrorMessage));

    }

}