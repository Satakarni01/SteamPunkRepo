import { LightningElement } from 'lwc';

export default class Me03parent extends LightningElement {
    parentMessage='Long live child';
    parentClick(event){
        this.parentMessage = 'Clicked the Parent Button';
    }
    invokeChild(event){
        const childMethod = this.template.querySelector('c-me-03-feed-child');
        const empJson = {
            Title:'Mr',
            FirstName:'John',
            LastName:'Doe'
        }
        childMethod.showMessage(empJson); 
        console.log('Invoke Child Method'); 
    }
}