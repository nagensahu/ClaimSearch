import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        createdon: "2021-06-01",
        inquiry: "210666000334",
        category: "Claims",
        subcategory : "EOB/RA Request",
        status: "Closed",
        inquiryowner: "Katherine Micele",
        channel :"Inbound Call",
        recentcontact: "MICHAEL AKHURST"
    }
];

const LINEITEMCOLUMNS = [
  { label: 'Created On', fieldName: 'createdon', type: "date-local", sortable: false, wrapText: true,typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        },
        initialWidth : 100 
    },
    { label: 'Inquiry', fieldName: 'inquiry', type: "button", sortable: false, wrapText: true, initialWidth : 140, typeAttributes: {variant: "base", label: {fieldName: "inquiry"}}},
    { label: 'Category', fieldName: 'category', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Sub Category', fieldName: 'subcategory', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: 'Status', fieldName: 'status', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Inquiry Owner', fieldName: 'inquiryowner', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: 'Channel', fieldName: 'channel', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Recent Contact', fieldName: 'recentcontact', type: "text", sortable: false, wrapText: true, initialWidth : 200}
];

export default class Claiminquiries extends LightningElement {

@track lineitemData = LINEITEMDATA;
  lineitemColumns = LINEITEMCOLUMNS;

}