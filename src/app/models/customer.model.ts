import { CustomerCommDetails } from "./customerCommDetails.model";
import { Card } from "./card.model";
import { Wallet } from "./wallet.model";
import { Preference } from "./preference.model";
export class Customer {
    ID_number:string; 
    ID_number_country_code: string;
    ID_type_id: number;
    Name:string;
    birth_date: Date;
    close_date: Date;
    customer_status_id: number;
    date_modified: Date;
    default_program_id: number;
    display_name: string;
    entity_class_id: number;
    entity_type_id: number;
    family_name: string;
    gender_id: number;
    id_agent: number;
    id_customer: string;
    id_user: number;
    initiator_id: number;
    is_loaded_files: number;
    is_locked: number;
    login_user_name: string;
    note: string;
    open_date: Date;
    private_name: string;
    risk: string;
    sub_type_id: number;
    commDetails:CustomerCommDetails;
    entity_class_other:string;
    cardsList:Card[];
    walletsList:Wallet[];
    PreferenceList:Preference[];
    



    constructor() {
        this.id_customer=null;
        this.private_name=null;
        this.family_name=null;
        this.birth_date=null;
        this.gender_id=null;
        this.display_name=null;
        this.ID_type_id=null;
        this.ID_number_country_code=null;
        this.entity_class_id=null;
        this.sub_type_id=null;
        this.default_program_id=null;
        this.Name=null;
        this.open_date = null;
        this.date_modified=null;
        this.close_date=null;
        this.login_user_name=null;
        this.entity_type_id=null;
        this.note=null;
        this.is_loaded_files=null;
        this.is_locked=null;
        this.id_agent=null;
        this.risk=null;
        this.initiator_id=null;
        this.id_user=null;
        this.customer_status_id=null;
        this.ID_number=null;
        this.commDetails=null;
        this.entity_class_other=null;
        this.cardsList=[];
        this.walletsList=[];
        this.PreferenceList=[];
        
    }
    
}