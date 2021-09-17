import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             parent:'Nurul Islam',
        }
        this.greetFather = this.greetFather.bind(this);
    }
    greetFather(){
        alert(`hi ${this.state.parent}`);
    }

    
    render() {
        return (
            <div>
                <ChildComponent gettingHandler = {this.greetFather}  />
            </div>
        )
    }
}

export default ParentComponent;
