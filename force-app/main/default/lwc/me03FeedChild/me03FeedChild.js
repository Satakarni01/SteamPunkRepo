import { LightningElement, api } from 'lwc';

export default class Me03FeedChild extends LightningElement {
    @api customerName; 
    changeLabel(event){
        this.customerName = 'Clicked the Child Button';
    }
    @api showMessage(emp){
        alert('Thank you for service:'  + emp.Title + ' '+ emp.FirstName + ' ' + emp.LastName);
     }   

    

}