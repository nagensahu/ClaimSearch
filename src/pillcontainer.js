import { LightningElement, track, api } from 'lwc';
 
export default class Pillcontainer extends LightningElement {
  @track privateitems = [];
  @api items;
}