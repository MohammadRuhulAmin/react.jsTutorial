import React,{Component} from 'react';


class StopWatch extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    increment(){
        if(this.state.count<10){
            this.setState({
                count:this.state.count+1,
            })
        }
        
    }
    decrement(){
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1,
            });
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=> this.increment()}> + </button>
                <h1>{this.state.count}</h1>
                <button onClick={()=> this.decrement()}> - </button>
            </div>
        )
    }
}

export default StopWatch;

