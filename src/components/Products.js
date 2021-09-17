import React,{Component} from 'react';
class Products extends Component{
    constructor(){
        super();
        this.state = {
            product:0,
        }
    }
    increment(){
      this.setState(prevState=>({
          product: prevState.product + 1,
      }))
    }
  
    decrement(){
        this.setState({
            product:this.state.product-1
        },
        ()=>{
            console.log("value is updating",this.state.product);

        });
        console.log(this.state.product);
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.increment()}>+</button>
                <h1> {this.state.product} </h1>
                <button onClick={()=>this.decrement()}>-</button>
            </div>
        );
    }
}




export default Products;