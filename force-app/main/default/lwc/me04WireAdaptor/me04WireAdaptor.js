import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccountList'; 
const  columns = [
        {label:'Name', fieldName:'Name', type:'text'}, 
        {label:'Account Number', fieldName:'AccountNumber', type:'text'}, 
        {label:'Description', fieldName:'Description', type:'text'}, 
        {label:'City', fieldName:'BillingCity', type:'text'}, 
        {label:'State', fieldName:'BillingState', type:'text'},
        {label:'Zip Code', fieldName:'BillingPostalCode', type:'text'}, 
        {label:'Revenue', fieldName:'AnnualRevenue', type:'currency'}
        
    ]; 

export default class Me04WireAdaptor extends LightningElement {
    recordColumns = columns; 
   allRecords; 
   allErrors; 
   @wire (getAccounts) wireAccount({data, error}){
    if(data){
        this.allRecords = data;
        console.log('allRecords: ' + this.allRecords);
    }
    if(error){
        console.log('something went wrong' + error.message); 
    }
   }
}