import React,{Component} from 'react';


class Counter extends Component{
    constructor(){
        super();
        this.state = {
            number:0,
        }
        
    }
    increment(){
        if(this.state.number<10){
            this.setState({
                number:this.state.number+1,
            })
        }
        
    }
    decrement(){
        if(this.state.number>0){
            this.setState({
                number:this.state.number-1
            });
        }
            
    
    }


    render(){
        return(
            <div>
                <button onClick={()=>this.increment()} >Increment </button>
                <h1>{this.state.number}</h1>
                <button onClick={()=>this.decrement()} >Decrement  </button>

            </div>
        )
    }


}

export default Counter;