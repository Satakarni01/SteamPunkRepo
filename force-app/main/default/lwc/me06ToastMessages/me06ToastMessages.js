import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'; 

export default class Me06ToastMessages extends LightningElement {
    handleSuccess() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Your account was updated successfully!',
                variant: 'success', 
                mode: 'dismissable'
            }));
    }
    handleError() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: 'Your account could not be updated.',
                variant: 'error', 
                mode: 'dismissable'
            }));  
    }
    handleWarning(){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Warning',
                message: 'Your account was updated with some errors.',
                variant:'warning', 
               mode:'pester'}
        ));
    }
    handleInformation(){
        this.dispatchEvent(
            new ShowToastEvent(
                {title:'Information', 
                    message:'This is information only', 
                    variant: 'Information'
                }
            )
        ); 
    }
}