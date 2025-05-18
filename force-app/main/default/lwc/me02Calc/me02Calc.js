import { LightningElement } from 'lwc';

export default class Me02Calc extends LightningElement {
    txtFirstNumber;
    txtSecondNumber;
    result = 0.0; 
    changeHandler(event){
        if(event.target.name == 'firstNum'){
            this.txtFirstNumber = event.target.value;
        }else {
            this.txtSecondNumber = event.target.value;
        }
    }
    add(){
        console.log("First Number: " + this.txtFirstNumber);
        console.log("Second Number: " + this.txtSecondNumber);
        this.result = parseFloat(this.txtFirstNumber) + parseFloat(this.txtSecondNumber);
    }
    subtract(){
        this.result = parseFloat(this.txtFirstNumber) - parseFloat(this.txtSecondNumber);
    }
    multiply(){
        this.result = parseFloat(this.txtFirstNumber) * parseFloat(this.txtSecondNumber);
    }
    divide(){
        this.result = parseFloat(this.txtFirstNumber) / parseFloat(this.txtSecondNumber);
    }
    modulus(){
        this.result = parseFloat(this.txtFirstNumber) % parseFloat(this.txtSecondNumber);
    }


}