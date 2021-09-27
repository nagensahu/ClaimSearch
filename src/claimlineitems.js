import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        num: "1",
        networkstatus: "In Network",
        procedure : "99214",
        revcode: "",
        diagnosis: "N509",
        startdate: "2019-06-26",
        enddate: "2019-06-26",
        pos :"11",
        tos: "OOPE",
        billedunits: "1",
        billedamount: "$160.44",
        authorization: "",
        paidamount: "$111.69",
        disallowcode: "PXN NetworX Std Fee Sched"
    },
    {   
        id: "2",
        num: "2",
        networkstatus: "In Network",
        procedure : "99214",
        revcode: "",
        diagnosis: "N509",
        startdate: "2019-06-26",
        enddate: "2019-06-26",
        pos :"11",
        tos: "OOPE",
        billedunits: "1",
        billedamount: "$160.44",
        authorization: "",
        paidamount: "$111.69",
        disallowcode: "PXN NetworX Std Fee Sched"
    },
];

const LINEITEMCOLUMNS = [
  { label: 'Item No.', fieldName: 'num', type: "button", sortable: true, wrapText: true, initialWidth : 70,
    typeAttributes: {variant: "base", label: {fieldName: "num"}} },
    { label: 'Network Status', fieldName: 'networkstatus', type: "text", sortable: true, wrapText: true, initialWidth : 140 },
    { label: 'Procedure', fieldName: 'procedure', type: "button", sortable: true, wrapText: true, initialWidth : 140,
    typeAttributes: {variant: "base", label: {fieldName: "procedure"}} },
    { label: 'Rev Code', fieldName: 'revcode', type: "text", sortable: true, wrapText: true, initialWidth : 140 },
    { label: 'Diagnosis', fieldName: 'diagnosis', type: "button", sortable: true, wrapText: true, initialWidth : 140,
    typeAttributes: {variant: "base", label: {fieldName: "diagnosis"}} },
    { label: 'Start Date', fieldName: 'startdate', type: "date-local", sortable: true, wrapText: true, 
    typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        },
    initialWidth : 140 
    },
    { label: 'End Date', fieldName: 'enddate', type: "date-local", sortable: true, wrapText: true, typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        },
    initialWidth : 140
    },
    { label: 'POS', fieldName: 'pos', type: "button", sortable: true, wrapText: true, initialWidth : 70,
    typeAttributes: {variant: "base", label: {fieldName: "pos"}} },
    { label: 'TOS', fieldName: 'tos', type: "button", sortable: true, wrapText: true, initialWidth : 70,
    typeAttributes: {variant: "base", label: {fieldName: "tos"}} },
    { label: 'Billed Units', fieldName: 'billedunits', type: "text", sortable: true, wrapText: true, initialWidth : 140 },
    { label: 'Billed Amount', fieldName: 'billedamount', type: "text", sortable: true, wrapText: true, initialWidth : 140 },
    { label: 'Authorization', fieldName: 'authorization', type: "text", sortable: true, wrapText: true, initialWidth : 140 },
    { label: 'Paid Amount', fieldName: 'paidamount', type: "text", sortable: true, wrapText: true, initialWidth : 140 },
    { label: 'Disallow Code', fieldName: 'disallowcode', type: "text", sortable: true, wrapText: true, initialWidth : 140 }
];

export default class Claimlineitems extends LightningElement {

@track lineitemData = LINEITEMDATA;
  lineitemColumns = LINEITEMCOLUMNS;

}