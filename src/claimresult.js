import { LightningElement, track } from 'lwc'; 
const sortoptions = [
    { label: 'Claim Number', value: 'Claim Number' },
    { label: 'Provider', value: 'Provider' },
    { label: 'Date of Service', value: 'Date of Service' },
    { label: 'Claim Status', value: 'Claim Status' },
    { label: 'Paid Date', value: 'Paid Date' },
    { label: 'Charged Amount', value: 'Charged Amount' },
    { label: 'Paid Amount', value: 'Paid Amount' },
    { label: 'Preventative Services', value: 'Preventative Services' }
  ];

export default class Claimresult extends LightningElement {
    sortoptions = sortoptions;
  sortedBy = 'Claim Number';
  sortDirection = 'utility:arrowup';

  handleSortChange(event) {
        this.sortedBy = event.detail.value;
    }

  toggleSort(){

    switch(this.sortDirection){
      case 'utility:arrowup':
        this.sortDirection = 'utility:arrowdown';
        break;
      case 'utility:arrowdown':
        this.sortDirection = 'utility:arrowup';
        break;
    }
  }
}