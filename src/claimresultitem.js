import { LightningElement,track } from 'lwc';

export default class Claimresultitem extends LightningElement {
    selected = false;
    cartSelectState = false;


  handleselect(){
    this.selected = true;
    
  }

  setAsCurrentItem(){
    const atag  = this.template.querySelector('a');
    atag.classList.add('slds-nav-vertical__item','slds-is-active');
    // This just selects the current item. Need to fire an event to tell 
    //the parent to deselect other items
  }

  handlecartSelectClick(){
    this.cartSelectState = !this.cartSelectState;
  }
}