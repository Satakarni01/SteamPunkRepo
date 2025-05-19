import { LightningElement, wire } from 'lwc';
import getcontacts from '@salesforce/apex/ContactController.getContactList'; 

export default class Me05ImperativeMethod extends LightningElement {
    receivedContacts; 
    errorlist; 
    listContacts(event){
        getcontacts().then(
            result => {
                this.receivedContacts = result;
            }
        ).catch(error => {
            this.errorlist = error;
        });
    }
}