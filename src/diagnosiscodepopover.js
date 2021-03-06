import { LightningElement, track } from 'lwc';

const CODEDATA = [
    {   
        id: "E039",
        codeDescription: "Hypothyroidism, unspecified",
        code: "E039"
    },
    {   
        id: "Z0000",
        codeDescription: "Encounter for general adult medical examination without abnormal findings",
        code: "Z0000"
    },
    {   
        id: "Z0102",
        codeDescription: "Encounter for general adult medical examination without abnormal findings",
        code: "Z0102"
    }
];

const CODECOLUMNS = [
    { label: 'Code', fieldName: 'code', type: "text", sortable: false },
    { label: 'Code Description', fieldName: 'codeDescription', type: "text", sortable: false, wrapText: true}
];

export default class Diagnosiscodepopover extends LightningElement {
    @track codeData = CODEDATA;
    codeColumns = CODECOLUMNS;

}