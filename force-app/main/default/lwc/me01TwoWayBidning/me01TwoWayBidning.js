import { LightningElement } from 'lwc';

export default class Me01TwoWayBidning extends LightningElement {
    message='Initial Value';
    cmpName; 
    cmpLabel; 
    cmpValue; 
    changeHandler(event){
        this.message = event.target.value;
        this.cmpName = event.target.name;
        this.cmpLabel = event.target.label;
    }
}

