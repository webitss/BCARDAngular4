import { CustomerCommDetails } from "./customerCommDetails.model";
import { Card } from "./card.model";
import { Wallet } from "./wallet.model";
import { Preference } from "./preference.model";

export class Agent {
    display_name: string;
    id_agent: number;
    private_name: string;
    family_name: string;
    establishment_date: Date;
    gender_id: number;
    ID_number: string;
    ID_type_id: number;
    ID_number_country_code: string;
    entity_class_id: number;
    entity_type_id: number;
    default_program_id: number;
    open_date: Date;
    date_modified: Date;
    close_date: Date;
    login_user_name: string;
    note: string;
    is_loaded_files: number;
    is_locked: number;
    risk: string;
    initiator_id: number;
    id_user: number;
    agent_status_id: number;
    Name: string;
    commDetails:CustomerCommDetails;
    sub_type_id:number;
    position_type_id:number;
    position_type_other:string;
    entity_class_other:string;
    cardsList:Card[];
    walletsList:Wallet[];
    PreferenceList:Preference[];

    constructor() {
        this.id_agent = null;
        this.private_name = null;
        this.family_name = null;
        this.establishment_date = null;
        this.gender_id = null;
        this.display_name = null;
        this.ID_type_id = null;
        this.ID_number_country_code = null;
        this.entity_class_id = null;
        this.default_program_id = null;
        this.open_date = null;
        this.date_modified = null;
        this.close_date = null;
        this.login_user_name = null;
        this.entity_type_id = null;
        this.note = null;
        this.is_loaded_files = null;
        this.is_locked = null;
        this.id_agent = null;
        this.risk = null;
        this.initiator_id = null;
        this.id_user = null;
        this.agent_status_id = null;
        this.ID_number = null;
        this.Name = null;
        this.commDetails=null
        this.sub_type_id=null;
        this.position_type_id=null;
        this.position_type_other=null;
        this.entity_class_other=null;
        this.cardsList=[];
        this.walletsList=[];
        this.PreferenceList=[];
    }
}