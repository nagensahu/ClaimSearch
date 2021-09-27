import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        payeetype: "1022563",
        payeeid: "800000003",
        payeename : "METROPOLITAN HOSPITAL UB",
        payeeaddr: "PO BOX 912, WYOMING, MI, KENT, 495090912",
        payeephone: "616-252-7200",
        eft: "YES",
        enddate: "2014-09-11",
        checknum :"1022563",
        combined: "YES",
        checkamt: "$3,988.80",
        refid: "2014090710500588",
        claimpaiddate: "2014-09-10"
    }
];

const LINEITEMCOLUMNS = [
  { label: 'Payee Type', fieldName: 'payeetype', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Payee Id', fieldName: 'payeeid', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Payee name', fieldName: 'payeename', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Payee Address', fieldName: 'payeeaddr', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Payee Phone', fieldName: 'payeephone', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'EFT', fieldName: 'eft', type: "text", sortable: false, wrapText: true, initialWidth : 70 },
    { label: 'EFT Date', fieldName: 'enddate', type: "date-local", sortable: false, wrapText: true, typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        },
    initialWidth : 100
    },
    { label: 'Check Number', fieldName: 'checknum', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Combined', fieldName: 'combined', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Check Amount', fieldName: 'checkamt', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Reference Id/Voucher Number', fieldName: 'refid', type: "button", sortable: false, wrapText: true, initialWidth : 140,
     typeAttributes: {variant: "base", label: {fieldName: "refid"}}},
    { label: 'Claim Paid Date', fieldName: 'claimpaiddate', type: "date-local", sortable: false, wrapText: true, typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        },
    initialWidth : 140 }
];

export default class Claimremittance extends LightningElement {
    @track lineitemData = LINEITEMDATA;
  lineitemColumns = LINEITEMCOLUMNS;
}