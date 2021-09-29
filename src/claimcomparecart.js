import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        claimnumber : "18453672827362",
        dateofservice: "2014-09-11",
        providername: "SACKED, GARY N.",
        chargedamount: "$91.00",
        paidamount: "$81.20",
        status :"Accepted;Batch Complete",
        paiddate: "2014-09-10",
        totalpatientliability: "$300.80",
        remove:""
    },
    {   
        id: "1",
        claimnumber : "18453672827362",
        dateofservice: "2014-09-11",
        providername: "SACKED, GARY N.",
        chargedamount: "$91.00",
        paidamount: "$85.20",
        status :"Accepted;Batch Complete",
        paiddate: "2014-09-10",
        totalpatientliability: "$320.80",
        remove:""
    }
];

const LINEITEMCOLUMNS = [
    { label: 'Claim Number', fieldName: 'claimnumber', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Date of Service', fieldName: 'dateofservice', type: "date-local", sortable: false, wrapText: true, typeAttributes:{
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
    { label: '', fieldName: 'remove', type: "button-icon", sortable: false, wrapText: true,
     typeAttributes: {variant: "brand", iconName: "utility:delete"}}
];

export default class Claimcomparecart extends LightningElement {
    showCart = true;
    @track lineitemData = LINEITEMDATA;
    lineitemColumns = LINEITEMCOLUMNS;
    toggleCart(){
        this.showCart = !this.showCart;
    }
}