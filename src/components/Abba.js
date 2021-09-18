import React, { Component } from 'react'
import Chele from './Chele';


export class Abba extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            father:'Nurul Islam',
            occupation:'Job Holder',
            location:'Dhaka',
            permanent:'Rajshahi',     
        }
        this.showInformation = this.showInformation.bind(this);
    }
   showInformation(child){
       alert(`${this.state.father}  ${this.state.occupation } ${this.state.location} child ${child}` )
   }
   
    

    render() {
        return (
            <div>
                <Chele  showHendler = {this.showInformation}/>
            </div>
        )
    }
}

export default Abba;
