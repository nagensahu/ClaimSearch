import { LightningElement, track } from 'lwc'; 

const CODEDATA = [
    {   
        id: "R3129",
        codeDescription: "Other microscopic hematuria",
        code: "R3129"
    },
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
    },
    {   
        id: "R3455",
        codeDescription: "Other microscopic hematuria",
        code: "R3455"
    },
    {   
        id: "E930",
        codeDescription: "Hypothyroidism, unspecified",
        code: "E930"
    },
];

const CODECOLUMNS = [
    { label: 'Code', fieldName: 'code', type: "text", sortable: false },
    { label: 'Code Description', fieldName: 'codeDescription', type: "text", sortable: false, wrapText: true}
];

export default class Claimsummary extends LightningElement {
  diagnosisPopover = false;
  openmodel = false;
  @track codeData = CODEDATA;
  codeColumns = CODECOLUMNS;

  showDiagnosisPopover(){
    this.diagnosisPopover = true;
  }

  hideDiagnosisPopover(){
    this.diagnosisPopover = false;
  }

  opencodemodal(){
    this.openmodel = true;
  }

  closecodemodal(){
    this.openmodel = false;
  }

  handlecartSelectClick(){
    
  }


}