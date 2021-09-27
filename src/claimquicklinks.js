import { LightningElement, track } from 'lwc';
export default class Claimquicklinks extends LightningElement {
  showclaimnote = false;

  openclaimnotes(){
    this.showclaimnote = true;
  }

  closeclaimnotes(){
    this.showclaimnote = false;
  }
}