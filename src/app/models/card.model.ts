export class Card {

    id_entity: number;
    id_ext_card: number;
    ex_brand_id: number;
    currency_code: number;
    exp_date: Date;
    cvv: string;
    card_number: string;
    name_on_card: string;
    ID_owner: string;
    ext_card_status_id: number;
    establishment_date: Date;
    relationship_type: number;
    relationships_status_id: number;
    initiator_id: number;

    constructor() {
        this.card_number = null;
        this.currency_code = null;
        this.cvv = null;
        this.establishment_date = null;
        this.ex_brand_id = null;
        this.exp_date = null;
        this.ext_card_status_id = null;
        this.id_entity = null;
        this.id_ext_card = null;
        this.ID_owner = null;
        this.initiator_id = null;
        this.name_on_card = null;
    }
}