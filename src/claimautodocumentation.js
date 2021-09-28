import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        memberid: "947947419",
        mebername: "RICHARD BOWFER",
        claimnumber : "18453672827362",
        dateofservice: "2014-09-11",
        providername: "SACKED, GARY N.",
        chargedamount: "$91.00",
        paidamount: "$81.20",
        status :"Accepted;Batch Complete",
        paiddate: "2014-09-10",
        totalpatientliability: "$300.80",
        frontendaccepted: "ACCEPTED",
        remove : ""
    },
    {   
        id: "1",
        memberid: "947947419",
        mebername: "RICHARD BOWFER",
        claimnumber : "18453672827362",
        dateofservice: "2014-09-11",
        providername: "SACKED, GARY N.",
        chargedamount: "$91.00",
        paidamount: "$81.20",
        status :"Accepted;Batch Complete",
        paiddate: "2014-09-10",
        totalpatientliability: "$300.80",
        frontendaccepted: "ACCEPTED",
        remove : ""
    }
];

const LINEITEMCOLUMNS = [
  { label: 'Member Id', fieldName: 'memberid', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Member Name', fieldName: 'mebername', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Claim Number', fieldName: 'claimnumber', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Date of service', fieldName: 'dateofservice', type: "date-local", sortable: false, wrapText: true, typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        },
    initialWidth : 140 },
    { label: 'Provider name', fieldName: 'providername', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Charged Amount', fieldName: 'chargedamount', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Paid Amount', fieldName: 'paidamount', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Status', fieldName: 'status', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Paid date', fieldName: 'paiddate', type: "date-local", sortable: false, wrapText: true, typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        },
    initialWidth : 100 },
    { label: 'Total Patient Liability', fieldName: 'totalpatientliability', type: "text", sortable: false, wrapText: true, initialWidth : 200},
    { label: 'Front End Accepted', fieldName: 'frontendaccepted', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: '', fieldName: 'remove', type: "button-icon", sortable: false, wrapText: true,
     typeAttributes: {variant: "brand", iconName: "utility:delete"}}
];

export default class Claimautodocumentation extends LightningElement {
    @track lineitemData = LINEITEMDATA;
  lineitemColumns = LINEITEMCOLUMNS;
}