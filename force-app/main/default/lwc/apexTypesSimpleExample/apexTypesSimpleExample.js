/* eslint-disable no-console */
import { LightningElement, wire } from 'lwc';
import apexTypePassThrough from '@salesforce/apex/ApexTypeSimpleExample.apexTypePassThrough';

export default class ApexTypesSimpleExample extends LightningElement {
    str1 = 'this';
    str2 = 'that';
    str3 = 'the other';
    apexResponse = {};
    parameterObject = {};

    constructor(){
        super();
        this.parameterObject = {
            str1: this.string1,
            str2: this.string2,
            str3: this.string3
        };
    }

    @wire (apexTypePassThrough, {input: '$parameterObject'})
    wiredApexResponse(response) {
        if (response.data) {
            console.log(`getting response: ${response.data}`);
            this.apexResponse = response; 
            this.error = undefined;
        } else if (response.error) {
            console.dir(response.error);
            this.apexResponse = undefined;
            this.error = response.error;
        }
    }

    handleInputChange(event) {
        console.log(this.parameterObject);
        this.parameterObject = {
            ...this.parameterObject,
            [event.target.name]: (this[event.target.name] = event.target.value)
        }
    }
}