import React ,{Component} from 'react';

class BindingEvent extends Component {
    constructor(){
        super();
        this.state = {
            message:"Event Binding For Channging State!!!",
        }
        this.channgeMessage = this.channgeMessage.bind(this);
    }
    channgeMessage(){
        this.setState({
            message:"Clicked message changed ! ",
        });
    }

    render(){
        return(
            <div>
                <h1>{ this.state.message }</h1>

                <button onClick={this.channgeMessage}>Event Binding</button>
            </div>
        );
    }
}

export default BindingEvent;