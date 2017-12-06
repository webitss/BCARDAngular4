import { Injectable } from "@angular/core";
import { AppProxy } from "../app.proxy";
import { KeyValue } from "../models/keyValue.model";
import { Value } from "../models/value.model";

@Injectable()
export class CodeTablesService{
    tablesList:KeyValue[]=[];
    genderList:Value[];
    idTypeList:Value[];
    countriesList:Value[];
    classList:Value[];
    typeList:Value[];
    statusList:Value[];
    programList:Value[];
    addressTypeList:Value[];
    telephoneTypeList:Value[];
    emailTypeList:Value[];
    positionTypeList:Value[];
    currencyList:Value[];
    cardStatusList:Value[];
    walletsStatusList:Value[];
    preferenceTypeList:Value[];
    constructor(private proxy:AppProxy){
        this.proxy.post('GetListCodeTables',null).then((res=>{this.tablesList=res.Result;
            console.log(this.tablesList);
            this.tablesList.forEach(t=>{console.log(t);console.log(t.Key);console.log(t.Key==='lov_Entity_Gender')})
            this.genderList=this.tablesList.filter(t=>t.Key==='lov_Entity_Gender')[0].Value;
            console.log(this.genderList);
            this.idTypeList=this.tablesList.filter(t=>t.Key==='lov_ID_Types')[0].Value;
            this.countriesList=this.tablesList.filter(t=>t.Key==='lov_Countries')[0].Value;
            this.classList=this.tablesList.filter(t=>t.Key==='lov_Entity_Class')[0].Value;
            this.typeList=this.tablesList.filter(t=>t.Key==='lov_Entity_Sub_Types')[0].Value;
            this.statusList=this.tablesList.filter(t=>t.Key==='lov_Entity_Statuses')[0].Value;
            this.programList=this.tablesList.filter(t=>t.Key==='vw_Price_Programs')[0].Value;
            this.addressTypeList=this.tablesList.filter(t=>t.Key==='lov_Communication_Types')[0].Value.filter(a=>a.iId2===2);
            this.telephoneTypeList=this.tablesList.filter(t=>t.Key==='lov_Communication_Types')[0].Value.filter(t=>t.iId2===1);
            this.emailTypeList=this.tablesList.filter(t=>t.Key==='lov_Communication_Types')[0].Value.filter(t=>t.iId2===3);
            this.positionTypeList=this.tablesList.filter(t=>t.Key==='lov_Entity_Position_types')[0].Value;
            this.currencyList=this.tablesList.filter(t=>t.Key==='lov_Currencies')[0].Value;
            this.cardStatusList=this.tablesList.filter(t=>t.Key==='lov_Entity_Statuses')[0].Value.filter(t=>t.iId2===10);
            this.walletsStatusList=this.tablesList.filter(t=>t.Key==='lov_Entity_Statuses')[0].Value.filter(t=>t.iId2===10);
            this.preferenceTypeList=this.tablesList.filter(t=>t.Key==='lov_Entitiy_Preference_Types')[0].Value;
        })); 
    }
}