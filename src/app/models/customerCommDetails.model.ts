import { Address } from "./customer_address.model";
import { Email } from "./customer_emails.model";
import { Telephone } from "./customer_telephones.model";

export class CustomerCommDetails {
    AddressList: Address[];
    EmailList: Email[];
    TelephoneList: Telephone[];
}