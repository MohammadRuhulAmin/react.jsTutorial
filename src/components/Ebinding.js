import React,{Component} from 'react';
class Ebinding extends Component {
    constructor(){
        super();
        this.state = {
            FirstMessage:"First Message",
            SecondMessage:"Second Message",
        }
        this.firstMessageChange = this.firstMessageChange.bind(this);
        this.secondMessageChange = this.secondMessageChange.bind(this);
    }
    firstMessageChange(){
        this.setState({
            FirstMessage:"First Message Chanaged", 
        });
    }
    secondMessageChange(){
        this.setState({
            SecondMessage:"Second Message Changed", 
        });
    }




    render(){
        return(
            <div>
               <h1>{this.state.FirstMessage}</h1>
               <button onClick={this.firstMessageChange}>Change</button>
               <h1>{this.state.SecondMessage}</h1>
               <button onClick={this.secondMessageChange}>Change </button>
            </div>
        );
    }

}

export default Ebinding;