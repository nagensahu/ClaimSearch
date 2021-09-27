import { LightningElement, track } from 'lwc'; 

export default class Claimresultitem extends LightningElement {
  selected = false;

  handleselect(){
    this.selected = true;
  }
}