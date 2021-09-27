import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        updatedon: "2021-06-01",
        notedescription: "EDI NOTE",
        note: "EDIBAT = 2687424 EDIDCN = 116340316100 EDINAM = MARDI SLUITER",
        updatedby : "facets_ba"
    },
    {   
        id: "2",
        updatedon: "2021-06-01",
        notedescription: "EDI NOTE",
        note: "EDIBAT = 2687424 EDIDCN = 116340316100 EDINAM = MARDI SLUITER",
        updatedby : "facets_ba"
    }
];

const LINEITEMCOLUMNS = [
    { label: 'Note Description', fieldName: 'notedescription', type: "text", sortable: false, wrapText: true},
    { label: 'Note', fieldName: 'note', type: "text", sortable: false, wrapText: true},
    { label: 'Updated On', fieldName: 'updatedon', type: "date-local", sortable: false, wrapText: true,typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        }
    },
    { label: 'Updated By', fieldName: 'updatedby', type: "text", sortable: false, wrapText: true}
];

export default class Claimnotes extends LightningElement {

@track lineitemData = LINEITEMDATA;
  lineitemColumns = LINEITEMCOLUMNS;

closemodal(){
    this.dispatchEvent(new CustomEvent('close'));
}
}